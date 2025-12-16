import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripHorizontal } from "lucide-react";

import { LinkFieldPresetMagento } from "@/components/link-field-presets";
import { LinkFieldPresetAtlassian } from "@/components/link-field-presets";
import { LinkFieldPresetAwarditAdmin } from "@/components/link-field-presets";
import { LinkFieldPresetOther } from "@/components/link-field-presets";

interface SortableItemProps {
  id: string | number;
  listName: string;
}

const getListComponent = (component: string) => {
  switch (component) {
    case "list-magento":
      return <LinkFieldPresetMagento />;
    case "list-atlassian":
      return <LinkFieldPresetAtlassian />;
    case "list-awardit-admin":
      return <LinkFieldPresetAwarditAdmin />;
    case "list-other":
      return <LinkFieldPresetOther />;
    default:
      return null;
  }
}

export function SortableItem({ id, listName }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const component = getListComponent(listName)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {component}
      <div className="flex justify-center">
        <GripHorizontal
          {...listeners}
          size={22}
          className="opacity-50 hover:opacity-85 cursor-pointer active:cursor-grabbing"
        />
      </div>
    </div>
  );
}
