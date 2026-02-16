"use client"

import {
  useSecondListStore,
  useThirdListStore,
  useForthListStore,
} from "@/store/list-nth";


import { useGeneralListStore } from "@/store/list-general";
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
  const generalListStore = useGeneralListStore();
  const secondListStore = useSecondListStore();
  const thirdListStore = useThirdListStore();
  const forthListStore = useForthListStore();
  const presetStore = usePresetStore();
  const pathname = usePathname();

  const reset = () => {
    generalListStore.reset();
    useGeneralListStore.persist.clearStorage()
    secondListStore.reset();
    useSecondListStore.persist.clearStorage()
    thirdListStore.reset();
    useThirdListStore.persist.clearStorage();
    forthListStore.reset();
    useForthListStore.persist.clearStorage();
    
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
