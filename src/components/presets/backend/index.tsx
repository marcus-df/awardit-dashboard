import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { useMagentoListStore } from "@/store/list-magento";
import { LinkAddSubmitComponent } from "@/components/link-field/link-add-submit";

export function BackendPreset() {
  const magentoArr = useMagentoListStore((state) => state.list);
  const addItem = useMagentoListStore((state) => state.add);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm gap-4">
      <LinkFieldOuter
        title="Magento"
        items={magentoArr}
        submitComp={<LinkAddSubmitComponent addItem={addItem} />}
      />
    </div>
  );
}
