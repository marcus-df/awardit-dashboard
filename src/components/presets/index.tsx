"use client"

import { FrontendPreset } from "@/components/presets/frontend";
import { BackendPreset } from "@/components/presets/backend";
import { CustomerServicePreset } from "@/components/presets/customer-service";
import { Button } from "@/components/ui/button";
import { useAwarditAdminListStore } from "@/store/list-awardit-admin";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { useMagentoListStore } from "@/store/list-magento";
import { usePresetStore } from "@/store/preset";

interface Props {
  preset: string | null;
}
function PresetSwitch({ preset }: Props) {
  switch (preset) {
    case "Frontend":
      return <FrontendPreset />

    case "Backend":
      return <BackendPreset />

    case "CustomerService":
      return <CustomerServicePreset />

    default:
      return null;
  }
}

export function Presets({ preset }: Props) {
  const awarditAdminStore = useAwarditAdminListStore();
  const atlassianListStore = useAtlassianListStore();
  const magentoListStore = useMagentoListStore();
  const presetStore = usePresetStore();

  const reset = () => {
    awarditAdminStore.reset();
    useAwarditAdminListStore.persist.clearStorage()
    atlassianListStore.reset();
    useAtlassianListStore.persist.clearStorage();
    magentoListStore.reset();
    useMagentoListStore.persist.clearStorage()
    presetStore.reset();
    usePresetStore.persist.clearStorage();
  }

  return (
    <>
      <Button variant="destructive" onClick={reset}>Remove settings</Button>
      <PresetSwitch preset={preset} />
    </>
  )
};