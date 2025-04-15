"use client";

import { LinkField } from "@/components/field/link-field";
import { magentoArray } from "@/data/list-magento";

export default function Settings() {
  return (
    <>
      <LinkField links={magentoArray} title="Magento" className="m-1 mt-3" />
    </>
  );
}
