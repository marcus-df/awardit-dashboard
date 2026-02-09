"use client"

import { useBeResourcesListStore } from "@/store/list-be-resources";
import { useFeFrameworksListStore } from "@/store/list-fe-frameworks";
import { useGeneralListStore } from "@/store/list-general";
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
  const beResourcesStore = useBeResourcesListStore();
  const feFrameworksListStore = useFeFrameworksListStore();
  const generalListStore = useGeneralListStore();
  const otherListStore = useOtherListStore();
  const presetStore = usePresetStore();
  const pathname = usePathname();

  const reset = () => {
    beResourcesStore.reset();
    useBeResourcesListStore.persist.clearStorage()
    feFrameworksListStore.reset();
    useFeFrameworksListStore.persist.clearStorage();
    generalListStore.reset();
    useGeneralListStore.persist.clearStorage()
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
