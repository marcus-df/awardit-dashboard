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
  deleteItem: (title: string) => void;
  menuComp?: React.ReactNode;
}

export interface LinkListStore {
  list: LinkFieldItem[];
  add: (item: LinkFieldItem) => void;
  delete: (title: string) => void;
  reset: () => void;
};
