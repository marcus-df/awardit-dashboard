import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { LinkFieldMenuGroup } from "@/components/link-field/link-field-menu-group";

import { useMagentoListStore } from "@/store/list-magento";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { useAwarditAdminListStore } from "@/store/list-awardit-admin";
import { useOtherListStore } from "@/store/list-other";

export function LinkFieldPresetMagento() {
  const itemArr = useMagentoListStore((state) => state.list);
  const addItem = useMagentoListStore((state) => state.add);
  const deleteItem = useMagentoListStore((state) => state.delete);

  return (
    <LinkFieldOuter
      title="Magento"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={<LinkFieldMenuGroup addItem={addItem} />}
    />
  );
}

export function LinkFieldPresetAtlassian() {
  const itemArr = useAtlassianListStore((state) => state.list);
  const addItem = useAtlassianListStore((state) => state.add);
  const deleteItem = useAtlassianListStore((state) => state.delete);

  return (
    <LinkFieldOuter
      title="Atlassian"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={<LinkFieldMenuGroup addItem={addItem} />}
    />
  );
}

export function LinkFieldPresetAwarditAdmin() {
  const itemArr = useAwarditAdminListStore((state) => state.list);
  const addItem = useAwarditAdminListStore((state) => state.add);
  const deleteItem = useAwarditAdminListStore((state) => state.delete);

  return (
    <LinkFieldOuter
      title="Awardit Admin"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={<LinkFieldMenuGroup addItem={addItem} />}
    />
  );
}

export function LinkFieldPresetOther() {
  const itemArr = useOtherListStore((state) => state.list);
  const addItem = useOtherListStore((state) => state.add);
  const deleteItem = useOtherListStore((state) => state.delete);

  return (
    <LinkFieldOuter
      title="Other"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={<LinkFieldMenuGroup addItem={addItem} />}
    />
  );
}

