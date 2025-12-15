import type { LinkFieldItem } from "@/types";

import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function LinkFieldInner({
  items,
  deleteItem,
}: {
  items: LinkFieldItem[];
  deleteItem: (title: string) => void;
}) {
  return (
    <div className="mb-2">
      {items.map((link, index) => (
        <ContextMenu key={index}>
          <Separator className="my-2" />
          <ContextMenuTrigger>
            <div className="px-3">
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="text-sm flex justify-between items-center"
              >
                {link.title}{" "}
                <ArrowUpRightIcon size={16} className="opacity-65" />
              </a>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-36">
            <ContextMenuItem onSelect={() => deleteItem(link.title)}>
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
}
