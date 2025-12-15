import type { HTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export interface ParagraphProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  size?: "l" | "m" | "s" | "default";
}

export const Paragraph: FC<ParagraphProps> = ({
  className,
  children,
  size = "default",
  ...restProps
}) => {
  return (
    <p className={cn(className, styles.p, styles[size])} {...restProps}>
      {children}
    </p>
  );
};
