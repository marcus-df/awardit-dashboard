import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { useMagentoListStore } from "@/store/list-magento";
import { useAwarditAdminListStore } from "@/store/list-awardit-admin";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { LinkAddSubmitComponent } from "@/components/link-field/link-add-submit";

export function FrontendPreset() {
  const magentoArr = useMagentoListStore((state) => state.list);
  const addMagentoItem = useMagentoListStore((state) => state.add);
  const deleteMagentoItem = useMagentoListStore((state) => state.delete);
  const awarditAdminArr = useAwarditAdminListStore((state) => state.list);
  const addAwarditAdminItem = useAwarditAdminListStore((state) => state.add);
  const atlassianArr = useAtlassianListStore((state) => state.list);
  const addAtlassianItem = useAtlassianListStore((state) => state.add);

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl">
      <LinkFieldOuter
        title="Magento"
        items={magentoArr}
        submitComp={<LinkAddSubmitComponent addItem={addMagentoItem} />}
      />
      <LinkFieldOuter
        title="Awardit admin"
        items={awarditAdminArr}
        submitComp={<LinkAddSubmitComponent addItem={addAwarditAdminItem} />}
      />
      <LinkFieldOuter
        title="Atlassian"
        items={atlassianArr}
        submitComp={<LinkAddSubmitComponent addItem={addAtlassianItem} />}
      />
    </div>
  )
}