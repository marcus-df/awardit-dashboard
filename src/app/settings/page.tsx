"use client";

import { AddLinkSubmitComponent } from "@/components/field/add-link-submit";
import { LinkFieldOuter } from "@/components/field/link-field-outer";
import { useMagentoListStore } from "@/store/list-magento";

export default function Settings() {
  const magentoArr = useMagentoListStore((state) => state.list);
  const addItem = useMagentoListStore((state) => state.add);

  return (
    <>
      <LinkFieldOuter
        items={magentoArr}
        title="Magento"
        className="m-1 mt-3"
        submitComp={<AddLinkSubmitComponent addItem={addItem} />}
      />
    </>
  );
}
