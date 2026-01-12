import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface SidebarProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {}

export const Sidebar: FC<SidebarProps> = (props) => {
  return <div {...props}>i am sidebar</div>;
};
