"use client";

import { useEffect, useState } from "react";

import type { DragEndEvent } from "@dnd-kit/core";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { CustomLists } from "./custom-lists";
import { SortableItem } from "@/components/sortable-item";
import { usePresetStore } from "@/store/preset";
import { useCustomListsStore } from "@/store/custom-lists";

interface PresetProps {
  lists: { id: UniqueIdentifier; listName: string }[];
}

interface Props {
  preset: string | null;
}

const frontendPresetLists = [
  { id: 1, listName: "list-magento" },
  { id: 2, listName: "list-atlassian" },
  { id: 3, listName: "list-awardit-admin" },
  { id: 4, listName: "list-other" },
];

const customerServicePresetLists = [
  { id: 1, listName: "list-magento" },
  { id: 2, listName: "list-other" },
];

const backendPresetLists = [{ id: 1, listName: "list-magento" }];

function PresetSwitch({ preset }: Props) {
  switch (preset) {
    case "frontend":
      return <ProfilePreset lists={frontendPresetLists} />;

    case "backend":
      return <ProfilePreset lists={backendPresetLists} />;

    case "customer-service":
      return <ProfilePreset lists={customerServicePresetLists} />;

    case "custom":
      return <CustomLists />;

    default:
      return null;
  }
}

export function Presets({ preset }: Props) {
  return <PresetSwitch preset={preset} />;
}

const reorderLists = (
  newItemsOrder: UniqueIdentifier[],
  listsArray: { id: UniqueIdentifier; listName: string }[]
) => {
  const newListsOrder = newItemsOrder.map((id) => {
    return listsArray.find((item) => item && item.id === id);
  });

  return newListsOrder.filter((item) => item !== undefined);
};

export function ProfilePreset({ lists }: PresetProps) {
  const setProfilePreset = usePresetStore((state) => state.setPreset);
  const profilePreset = usePresetStore((state) => state.preset);
  const updateLists = useCustomListsStore((state) => state.update);

  const [items, setItems] = useState<UniqueIdentifier[]>(
    lists.map((item) => item.id)
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const reorderedLists = reorderLists(items, lists);

    // Not working perfectly. Will always be custom in state, but doesnt affect user experience
    if (
      reorderedLists &&
      reorderedLists.length > 0 &&
      reorderedLists !== lists
    ) {
      updateLists(reorderedLists);

      if (profilePreset !== "custom") {
        setProfilePreset("custom");
      }
    }
  }, [items]);

  useEffect(() => {
    if (lists.length < items.length) {
      setItems(lists.map((item) => item && item.id));
    }
  }, [lists, items]);

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((id) => (
            <SortableItem
              listName={
                lists.find((item) => item && item.id === id)?.listName || ""
              }
              id={id}
              key={id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
