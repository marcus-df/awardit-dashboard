"use client"

import { useState } from "react";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "@/components/sortable-item";

interface PresetProps {
  presetLists: { id: number; listName: string }[];
}

interface Props {
  preset: string | null;
}

const frontendPresetLists = [
  { id: 1, listName: "preset-magento" },
  { id: 2, listName: "preset-atlassian" },
  { id: 3, listName: "preset-awardit-admin" },
  { id: 4, listName: "preset-other" },
];

const customerServicePresetLists = [
  { id: 1, listName: "preset-magento" },
  { id: 2, listName: "preset-other" },
];

const backendPresetLists = [
  { id: 1, listName: "preset-magento" },
];


function PresetSwitch({ preset }: Props) {
  switch (preset) {
    case "Frontend":
      return <ProfilePreset presetLists={frontendPresetLists} />

    case "Backend":
      return <ProfilePreset presetLists={backendPresetLists} />

    case "CustomerService":
      return <ProfilePreset presetLists={customerServicePresetLists} />

    default:
      return null;
  }
}

export function Presets({ preset }: Props) {
  return (
    <PresetSwitch preset={preset} />
  )
};

export function ProfilePreset({ presetLists }: PresetProps) {
  const [items, setItems] = useState(new Array(presetLists.length).fill(0).map((_, index) => index + 1));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
              listName={presetLists.find((item) => item.id === id)?.listName!}
              id={id}
              key={id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
