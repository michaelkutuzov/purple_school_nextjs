import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import styles from "./Button.module.css";

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

export const Button: FC<ButtonProps> = ({
  className,
  appearance,
  arrow = "none",
  children,
  ...restProps
}) => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...restProps}
    >
      {children}
      {arrow && arrow !== "none" && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
