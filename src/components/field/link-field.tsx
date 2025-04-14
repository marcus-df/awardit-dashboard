import React, { Fragment } from "react";
import { ExternalLink } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Link {
  href: string;
  title: string;
  starred: boolean;
  external?: boolean
}

interface LinkFieldProps {
  className: string;
  title: string;
  links: Link[];
}

export function LinkField({ className, title, links }: LinkFieldProps) {
  return (
    <div className={className}>
      <ScrollArea className="h-72 w-64 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-semibold leading-none text-amber-600 dark:text-amber-400">
            {title}
          </h4>
          {links.map((link, index) => (
            <Fragment key={index}>
              <a href={link.href} className="text-sm flex justify-between items-center">
                {link.title} <ExternalLink size={18} className="opacity-80" />
              </a>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
