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

import { restrictToWindowEdges } from "@dnd-kit/modifiers";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { Card, CardContent } from "@/components/ui/card";

import { CustomLists } from "./custom-lists";
import { SortableItem } from "@/components/sortable-item";
import { usePresetStore } from "@/store/preset";
import { useCustomListsStore } from "@/store/custom-lists";

interface PresetProps {
  lists: { uid: UniqueIdentifier }[];
}

interface Props {
  preset: string | null;
}

const frontendPresetLists = [
  { uid: "list-general" },
  { uid: "list-nth-third" },
  { uid: "list-nth-forth" },
];

const backendPresetLists = [
  { uid: "list-general" },
  { uid: "list-nth-second" },
  { uid: "list-nth-forth" },
];

const fullstackPresetLists = [
  { uid: "list-general" },
  { uid: "list-nth-second" },
  { uid: "list-nth-third" },
  { uid: "list-nth-forth" },
];

function PresetSwitch({ preset }: Props) {
  switch (preset) {
    case "frontend":
      return <ProfilePreset lists={frontendPresetLists} />;
    case "backend":
      return <ProfilePreset lists={backendPresetLists} />;
    case "fullstack":
      return <ProfilePreset lists={fullstackPresetLists} />;
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
  listsArray: { uid: UniqueIdentifier }[],
) => {
  const newListsOrder = newItemsOrder.map((id) => {
    return listsArray.find((item) => item && item.uid === id);
  });

  return newListsOrder.filter((item) => item !== undefined);
};

export function ProfilePreset({ lists }: PresetProps) {
  const setProfilePreset = usePresetStore((state) => state.setPreset);
  const profilePreset = usePresetStore((state) => state.preset);
  const updateLists = useCustomListsStore((state) => state.update);

  const [items, setItems] = useState<UniqueIdentifier[]>(
    lists.map((item) => item.uid),
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    const reorderedLists = reorderLists(items, lists);

    if (
      reorderedLists &&
      reorderedLists.length > 0 &&
      JSON.stringify(reorderedLists) !== JSON.stringify(lists)
    ) {
      updateLists(reorderedLists);

      if (profilePreset !== "custom") {
        setProfilePreset("custom");
      }
    }
  }, [items]);

  useEffect(() => {
    if (lists.length < items.length) {
      setItems(lists.map((item) => item && item.uid));
    }
  }, [lists, items]);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl">
      <Card className="mb-6 pb-4">
        <CardContent>
          <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-1">
            <DndContext
              sensors={sensors}
              modifiers={[restrictToWindowEdges]}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={items} strategy={rectSortingStrategy}>
                {items.map((id) => (
                  <SortableItem id={id} key={id} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </CardContent>
      </Card>
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
