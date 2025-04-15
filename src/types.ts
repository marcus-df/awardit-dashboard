export interface LinkFieldItem {
  href: string;
  title: string;
  starred?: boolean;
  external?: boolean;
}

export interface LinkFieldProps {
  className: string;
  title: string;
  items: LinkFieldItem[];
  submitComp?: React.ReactNode;
}