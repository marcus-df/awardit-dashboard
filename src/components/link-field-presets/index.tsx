import { LinkFieldOuter } from "@/components/link-field/link-field-outer";
import { LinkFieldMenuGroup } from "@/components/link-field/link-field-menu-group";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useGeneralListStore } from "@/store/list-general";

import {
  useSecondListStore,
  useThirdListStore,
  useForthListStore,
} from "@/store/list-nth";

import { useCustomListsStore } from "@/store/custom-lists";
import { LinkFieldItem } from "@/types";

interface LinkFieldProps {
  uid: UniqueIdentifier;
}

interface MenuComponentProps {
  uid: UniqueIdentifier;
  title: string;
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

function MenuComponent({
  uid,
  title,
  add,
  changeTitle,
  reset,
}: MenuComponentProps) {
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

export function LinkFieldPresetSecond({ uid }: LinkFieldProps) {
  const title = useSecondListStore((state) => state.title);
  const changeTitle = useSecondListStore((state) => state.changeTitle);
  const itemArr = useSecondListStore((state) => state.list);
  const addItem = useSecondListStore((state) => state.add);
  const delItem = useSecondListStore((state) => state.delete);
  const reset = useSecondListStore((state) => state.reset);

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

export function LinkFieldPresetThird({ uid }: LinkFieldProps) {
  const title = useThirdListStore((state) => state.title);
  const changeTitle = useThirdListStore((state) => state.changeTitle);
  const itemArr = useThirdListStore((state) => state.list);
  const addItem = useThirdListStore((state) => state.add);
  const delItem = useThirdListStore((state) => state.delete);
  const reset = useThirdListStore((state) => state.reset);

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

export function LinkFieldPresetForth({ uid }: LinkFieldProps) {
  const title = useForthListStore((state) => state.title);
  const changeTitle = useForthListStore((state) => state.changeTitle);
  const itemArr = useForthListStore((state) => state.list);
  const addItem = useForthListStore((state) => state.add);
  const delItem = useForthListStore((state) => state.delete);
  const reset = useForthListStore((state) => state.reset);

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
