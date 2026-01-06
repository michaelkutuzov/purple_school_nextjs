import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Htag.module.css";

export interface HtagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> {
  tag?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
}

export const Htag: FC<HtagProps> = ({ className, tag = "h1", children }) => {
  const Tag = tag;
  return (
    <Tag className={cn(className, styles.root, styles[tag])}>{children}</Tag>
  );
};
