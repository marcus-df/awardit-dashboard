"use client"

import { useAwarditAdminListStore } from "@/store/list-awardit-admin";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { useMagentoListStore } from "@/store/list-magento";
import { useOtherListStore } from "@/store/list-other";
import { usePresetStore } from "@/store/preset";
import { usePathname } from "next/navigation";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Header() {
  const awarditAdminStore = useAwarditAdminListStore();
  const atlassianListStore = useAtlassianListStore();
  const magentoListStore = useMagentoListStore();
  const otherListStore = useOtherListStore();
  const presetStore = usePresetStore();
  const pathname = usePathname();

  const reset = () => {
    awarditAdminStore.reset();
    useAwarditAdminListStore.persist.clearStorage()
    atlassianListStore.reset();
    useAtlassianListStore.persist.clearStorage();
    magentoListStore.reset();
    useMagentoListStore.persist.clearStorage()
    otherListStore.reset();
    useOtherListStore.persist.clearStorage();
    
    presetStore.reset();
    usePresetStore.persist.clearStorage();
  }

  return (
    <div className="ml-2">
      {presetStore && pathname === "/" && (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Options</MenubarTrigger>
            <MenubarContent align="end">
              <MenubarItem onSelect={reset}>
                Remove Settings
              </MenubarItem>
              <MenubarItem disabled>
                Import Settings
                <MenubarShortcut>⌘I</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Export Settings
                <MenubarShortcut>⌘E</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    </div>
  )
}
