import type { UniqueIdentifier } from "@dnd-kit/core";

export interface LinkFieldItem {
  href: string;
  title: string;
  starred?: boolean;
  external?: boolean;
}

export interface LinkFieldProps {
  className?: string;
  title: string;
  items: LinkFieldItem[];
  delItem: (title: string) => void;
  menuComp?: React.ReactNode;
}

export interface LinkListStore {
  title: string;
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
  delete: (title: string) => void;
  changeTitle: (title: string) => void;
  reset: () => void;
};

export interface CustomListsStore {
  lists: { uid: UniqueIdentifier, title: string }[];
  update: (lists: { uid: UniqueIdentifier, title: string }[]) => void;
  remove: (uid: UniqueIdentifier) => void;
  reset: () => void;
}