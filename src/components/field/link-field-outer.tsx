import type { LinkFieldProps } from "@/types";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkFieldInner } from "./link-field-inner";

export function LinkFieldOuter({
  className,
  title,
  items,
  submitComp,
}: LinkFieldProps) {
  return (
    <div className={className}>
      <ScrollArea className="h-72 w-64 rounded-md border">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold leading-none text-amber-600 dark:text-amber-400">
              {title}
            </h4>
            {submitComp && submitComp}
          </div>
          <LinkFieldInner items={items} />
        </div>
      </ScrollArea>
    </div>
  );
}
