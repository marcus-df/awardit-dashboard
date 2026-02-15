"use client"

import { useBeResourcesListStore } from "@/store/list-be-resources";
import { useFeResourcesListStore } from "@/store/list-fe-resources";
import { useGeneralListStore } from "@/store/list-general";
import { usePresetStore } from "@/store/preset";
import { usePathname } from "next/navigation";

import { useGenericListStore } from "@/store/list-generic";

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
  const feResourcesListStore = useFeResourcesListStore();
  const generalListStore = useGeneralListStore();
  const genericListStore = useGenericListStore();
  const presetStore = usePresetStore();
  const pathname = usePathname();

  const reset = () => {
    beResourcesStore.reset();
    useBeResourcesListStore.persist.clearStorage()
    feResourcesListStore.reset();
    useFeResourcesListStore.persist.clearStorage();
    generalListStore.reset();
    useGeneralListStore.persist.clearStorage()
    genericListStore.reset();
    useGenericListStore.persist.clearStorage();
    
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
