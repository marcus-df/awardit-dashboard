import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { LinkFieldMenuGroup } from "@/components/link-field/link-field-menu-group";

import { useGeneralListStore } from "@/store/list-general";
import { useFeFrameworksListStore} from "@/store/list-fe-frameworks";
import { useBeResourcesListStore } from "@/store/list-be-resources";
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

export function LinkFieldPresetGeneral() {
  const itemArr = useGeneralListStore((state) => state.list);
  const addItem = useGeneralListStore((state) => state.add);
  const deleteItem = useGeneralListStore((state) => state.delete);
  const resetList = useGeneralListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="General"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-general")}
        />
      }
    />
  );
}

export function LinkFieldPresetFeFrameworks() {
  const itemArr = useFeFrameworksListStore((state) => state.list);
  const addItem = useFeFrameworksListStore((state) => state.add);
  const deleteItem = useFeFrameworksListStore((state) => state.delete);
  const resetList = useFeFrameworksListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="FE Frameworks"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-fe-frameworks")}
        />
      }
    />
  );
}

export function LinkFieldPresetBeResources() {
  const itemArr = useBeResourcesListStore((state) => state.list);
  const addItem = useBeResourcesListStore((state) => state.add);
  const deleteItem = useBeResourcesListStore((state) => state.delete);
  const resetList = useBeResourcesListStore((state) => state.reset);

  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldOuter
      title="BE Resources"
      items={itemArr}
      deleteItem={deleteItem}
      menuComp={
        <LinkFieldMenuGroup
          addItem={addItem}
          resetList={resetList}
          removeList={() => removeList(lists, remove, "list-be-resources")}
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
