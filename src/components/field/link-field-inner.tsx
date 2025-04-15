import type { LinkFieldItem, LinkFieldProps } from "@/types";

import React, { Fragment } from "react";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function LinkFieldInner({ items }: { items: LinkFieldItem[] }) {
  return (
    <div>
      {items.map((link, index) => (
        <Fragment key={index}>
          <Separator className="my-2" />
          <a
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            className="text-sm flex justify-between items-center"
          >
            {link.title} <ExternalLink size={16} className="opacity-65" />
          </a>
        </Fragment>
      ))}
    </div>
  );
}
