import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripHorizontal } from "lucide-react";
import { UniqueIdentifier } from "@dnd-kit/core";

import {
  LinkFieldPreset,
  LinkFieldPresetBeResources,
  LinkFieldPresetFeResources,
  LinkFieldPresetGeneric,
} from "@/components/link-field-presets";

interface SortableItemProps {
  id: UniqueIdentifier;
}

const getListComponent = (uid: UniqueIdentifier) => {
  switch (uid) {
    case "list-general":
      return <LinkFieldPreset uid={uid} />;
    case "list-fe-resources":
      return <LinkFieldPresetFeResources uid={uid} />;
    case "list-be-resources":
      return <LinkFieldPresetBeResources uid={uid} />;
    case "list-generic":
      return <LinkFieldPresetGeneric uid={uid} />;
    default:
      return null;
  }
};

export function SortableItem({ id }: SortableItemProps) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const component = getListComponent(id);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? "20" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {component}
      <div className="flex justify-center">
        <button 
          ref={setActivatorNodeRef}
          {...listeners}
          className="opacity-50 hover:opacity-85 cursor-pointer active:cursor-grabbing"
        >
          <GripHorizontal size={24}/>
        </button>
      </div>
    </div>
  );
}
