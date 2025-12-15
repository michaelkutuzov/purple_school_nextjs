import type { FC, ReactNode } from "react";
import styles from "./Htag.module.css";

export interface HtagProps {
  tag?: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const Htag: FC<HtagProps> = ({ tag = "h1", children }) => {
  const Tag = tag;
  return <Tag className={styles[tag]}>{children}</Tag>;
};
