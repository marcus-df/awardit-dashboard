"use client"

import { Button } from "@/components/ui/button";
import { useAwarditAdminListStore } from "@/store/list-awardit-admin";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { useMagentoListStore } from "@/store/list-magento";
import { usePresetStore } from "@/store/preset";
import { usePathname } from "next/navigation";

export default function Header() {
  const awarditAdminStore = useAwarditAdminListStore();
  const atlassianListStore = useAtlassianListStore();
  const magentoListStore = useMagentoListStore();
  const presetStore = usePresetStore();
  const pathname = usePathname();

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
    <div className="ml-2">
      {presetStore && pathname === "/" && (
        <Button variant="destructive" onClick={reset}>Remove settings</Button>
      )}
    </div>
  )
}
