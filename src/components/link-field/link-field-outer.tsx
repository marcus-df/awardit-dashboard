import type { LinkFieldProps } from "@/types";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkFieldInner } from "./link-field-inner";

export function LinkFieldOuter({
  className,
  title,
  items,
  deleteItem,
  menuComp,
}: LinkFieldProps) {
  return (
    <div className={className}>    
      <div className="border rounded-md bg-background">
        <div className="p-3 pb-1 flex justify-between items-center">
          <h4 className="text-md font-semibold leading-none text-amber-600 dark:text-amber-400">
            {title}
          </h4>
          {menuComp && menuComp}
        </div>
        <ScrollArea className="h-72 w-72">
          <LinkFieldInner items={items} deleteItem={deleteItem} />
        </ScrollArea>
      </div>
    </div>
  );
}
