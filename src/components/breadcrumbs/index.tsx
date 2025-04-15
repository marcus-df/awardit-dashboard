"use client";
import { Slash } from "lucide-react";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const links = pathname.split("/").filter(Boolean);
  console.log(links);
  if (pathname === "/") {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        {links.length > 0 &&
          links.map((link, i) => {
            return (
              <Fragment key={i}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={"/" + link}>
                    {String(link).charAt(0).toUpperCase() +
                      String(link).slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {i !== links.length - 1 && (
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                )}
              </Fragment>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
