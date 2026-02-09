import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { LinkFieldMenuGroup } from "@/components/link-field/link-field-menu-group";

import { useMagentoListStore } from "@/store/list-magento";
import { useAtlassianListStore } from "@/store/list-atlassian";
import { useAdminListStore } from "@/store/list-admin";
import { useOtherListStore } from "@/store/list-other";
import { useCustomListsStore } from "@/store/custom-lists";
import { UniqueIdentifier } from "@dnd-kit/core";

const removeList = (
  lists: { id: UniqueIdentifier; listName: string }[],
  remove: (id: UniqueIdentifier) => void,
  listName: string
) => {
  lists.forEach((list) => {
    if (list?.listName === listName) {
      remove(list.id);
    }
  });
};

export function LinkFieldPresetMagento() {
  const itemArr = useMagentoListStore((state) => state.list);
  const addItem = useMagentoListStore((state) => state.add);
  const deleteItem = useMagentoListStore((state) => state.delete);
  const resetList = useMagentoListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="Magento"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-magento")}
        />
      }
    />
  );
}

export function LinkFieldPresetAtlassian() {
  const itemArr = useAtlassianListStore((state) => state.list);
  const addItem = useAtlassianListStore((state) => state.add);
  const deleteItem = useAtlassianListStore((state) => state.delete);
  const resetList = useAtlassianListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="Atlassian"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-atlassian")}
        />
      }
    />
  );
}

export function LinkFieldPresetAdmin() {
  const itemArr = useAdminListStore((state) => state.list);
  const addItem = useAdminListStore((state) => state.add);
  const deleteItem = useAdminListStore((state) => state.delete);
  const resetList = useAdminListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="Admin"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-admin")}
        />
      }
    />
  );
}

export function LinkFieldPresetOther() {
  const itemArr = useOtherListStore((state) => state.list);
  const addItem = useOtherListStore((state) => state.add);
  const deleteItem = useOtherListStore((state) => state.delete);
  const resetList = useOtherListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="Other"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-other")}
        />
      }
    />
  );
}
