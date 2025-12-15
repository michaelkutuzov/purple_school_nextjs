import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Tag.module.css";

export interface TagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  size?: "m" | "s";
  color: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}

export const Tag: FC<TagProps> = ({
  className,
  children,
  size = "s",
  color = "ghost",
  href,
  ...restProps
}) => {
  return (
    <div
      className={cn(className, styles.tag, styles[size], styles[color])}
      {...restProps}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
