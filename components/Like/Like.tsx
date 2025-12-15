import type { FC } from "react";
import cn from "classnames";
import LikeIcon from "./like.svg";
import styles from "./Like.module.css";

export interface LikeProps {
  className?: string;
  count?: number;
}

export const Like: FC<LikeProps> = ({ className, count = 0 }) => {
  return (
    <div className={cn(className, styles.like)}>
      <span className={styles["likes-count"]}>{count}</span>
      <LikeIcon />
    </div>
  );
};
