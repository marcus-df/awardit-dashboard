import type { LinkFieldItem, LinkFieldProps } from "@/types";

import React, { Fragment } from "react";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function LinkFieldInner({ items }: { items: LinkFieldItem[] }) {
  return (
    <div>
      {items.map((link, index) => (
        <ContextMenu key={index}>
          <Separator className="my-2" />
          <ContextMenuTrigger>
            <a
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className="text-sm flex justify-between items-center"
            >
              {link.title} <ExternalLink size={16} className="opacity-65" />
            </a>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
}
