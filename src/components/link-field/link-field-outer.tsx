import type { LinkFieldProps } from "@/types";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkFieldInner } from "./link-field-inner";

export function LinkFieldOuter({
  className,
  title,
  items,
  delItem,
  menuComp,
}: LinkFieldProps) {
  return (
    <div className={className}>    
      <div className="border rounded-md bg-background h-92 lg:w-68">
        <div className="p-3 pb-1 flex justify-between items-center">
          <h4 className="text-md font-semibold mr-4 leading-none text-amber-600 dark:text-amber-400">
            {title}
          </h4>
          {menuComp && menuComp}
        </div>
        <div className="flex flex-1 shrink">
          <ScrollArea className="w-full">
            <LinkFieldInner items={items} delItem={delItem} />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
