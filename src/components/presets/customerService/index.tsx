import { LinkFieldOuter } from "@/components/field/link-field-outer";
import { magentoArray } from "@/data/list-magento";

export function CustomerServicePreset() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm gap-4">
      <LinkFieldOuter title="Magento" items={magentoArray} />
    </div>
  )
}