import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { LinkFieldMenuGroup } from "@/components/link-field/link-field-menu-group";

import { UniqueIdentifier } from "@dnd-kit/core";

import { useGeneralListStore } from "@/store/list-general";
import { useFeResourcesListStore } from "@/store/list-fe-resources";
import { useBeResourcesListStore } from "@/store/list-be-resources";
import { useCustomListsStore } from "@/store/custom-lists";

import { useGenericListStore } from "@/store/list-generic";
import { LinkFieldItem } from "@/types";

interface LinkFieldProps {
  uid: UniqueIdentifier;
}

interface MenuComponentProps {
  uid: UniqueIdentifier;
  title: string,
  add: (item: LinkFieldItem) => void;
  changeTitle: (title: string) => void;
  reset: () => void;
}

const removeList = (
  lists: { uid: UniqueIdentifier }[],
  remove: (uid: UniqueIdentifier) => void,
  uid: UniqueIdentifier,
) => {
  lists.forEach((list) => {
    if (list?.uid === uid) {
      remove(list.uid);
    }
  });
};

function MenuComponent({ uid, title, add, changeTitle, reset }: MenuComponentProps) {
  const lists = useCustomListsStore((state) => state.lists);
  const remove = useCustomListsStore((state) => state.remove);

  return (
    <LinkFieldMenuGroup
      addItem={add}
      title={title}
      changeTitle={changeTitle}
      resetList={reset}
      removeList={() => removeList(lists, remove, uid)}
    />
  );
}

export function LinkFieldPreset({ uid }: LinkFieldProps) {
  const title = useGeneralListStore((state) => state.title);
  const changeTitle = useGeneralListStore((state) => state.changeTitle);
  const itemArr = useGeneralListStore((state) => state.list);
  const addItem = useGeneralListStore((state) => state.add);
  const delItem = useGeneralListStore((state) => state.delete);
  const reset = useGeneralListStore((state) => state.reset);


  return (
    <LinkFieldOuter
      title={title}
      items={itemArr}
      delItem={delItem}
      menuComp={
        <MenuComponent
          uid={uid}
          add={addItem}
          reset={reset}
          title={title}
          changeTitle={changeTitle}
        />
      }
    />
  );
}

export function LinkFieldPresetFeResources({ uid }: LinkFieldProps) {
  const title = useFeResourcesListStore((state) => state.title);
  const changeTitle = useFeResourcesListStore((state) => state.changeTitle);
  const itemArr = useFeResourcesListStore((state) => state.list);
  const addItem = useFeResourcesListStore((state) => state.add);
  const delItem = useFeResourcesListStore((state) => state.delete);
  const reset = useFeResourcesListStore((state) => state.reset);

  return (
    <LinkFieldOuter
      title={title}
      items={itemArr}
      delItem={delItem}
      menuComp={
        <MenuComponent
          uid={uid}
          add={addItem}
          reset={reset}
          title={title}
          changeTitle={changeTitle}
        />
      }
    />
  );
}

export function LinkFieldPresetBeResources({ uid }: LinkFieldProps) {
  const title = useBeResourcesListStore((state) => state.title);
  const changeTitle = useBeResourcesListStore((state) => state.changeTitle);
  const itemArr = useBeResourcesListStore((state) => state.list);
  const addItem = useBeResourcesListStore((state) => state.add);
  const delItem = useBeResourcesListStore((state) => state.delete);
  const reset = useBeResourcesListStore((state) => state.reset);

  return (
    <LinkFieldOuter
      title={title}
      items={itemArr}
      delItem={delItem}
      menuComp={
        <MenuComponent
          uid={uid}
          add={addItem}
          reset={reset}
          title={title}
          changeTitle={changeTitle}
        />
      }
    />
  );
}

export function LinkFieldPresetGeneric({ uid }: LinkFieldProps) {
  const title = useGenericListStore((state) => state.title);
  const changeTitle = useGenericListStore((state) => state.changeTitle);
  const itemArr = useGenericListStore((state) => state.list);
  const addItem = useGenericListStore((state) => state.add);
  const delItem = useGenericListStore((state) => state.delete);
  const reset = useGenericListStore((state) => state.reset);

  return (
    <LinkFieldOuter
      title={title}
      items={itemArr}
      delItem={delItem}
      menuComp={
        <MenuComponent
          uid={uid}
          add={addItem}
          reset={reset}
          title={title}
          changeTitle={changeTitle}
        />
      }
    />
  );
}
