import { LinkFieldOuter } from "@/components/field/link-field-outer";
import { useMagentoListStore } from "@/store/list-magento";
import { AddLinkSubmitComponent } from "@/components/field/add-link-submit";

export function BackendPreset() {
  const magentoArr = useMagentoListStore((state) => state.list);
  const addItem = useMagentoListStore((state) => state.add);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm gap-4">
      <LinkFieldOuter
        title="Magento"
        items={magentoArr}
        submitComp={<AddLinkSubmitComponent addItem={addItem} />}
      />
    </div>
  );
}
