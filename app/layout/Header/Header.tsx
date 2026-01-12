import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface HeaderProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {}

export const Header: FC<HeaderProps> = (props) => {
  return <header {...props}>i am header</header>;
};
