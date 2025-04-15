import type { LinkFieldProps } from "@/types";

import React, { Fragment } from "react";
import { ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export function LinkField({ className, title, links }: LinkFieldProps) {
  return (
    <div className={className}>
      <ScrollArea className="h-72 w-64 rounded-md border">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold leading-none text-amber-600 dark:text-amber-400">
              {title}
            </h4>
            <Button variant="outline" size="sm">
              <Plus />
            </Button>
          </div>
          {links.map((link, index) => (
            <Fragment key={index}>
              <Separator className="my-2" />
              <a
                href={link.href}
                className="text-sm flex justify-between items-center"
              >
                {link.title} <ExternalLink size={16} className="opacity-65" />
              </a>
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
