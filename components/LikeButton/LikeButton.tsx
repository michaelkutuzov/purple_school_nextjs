import { FC, useState } from "react";
import cn from "classnames";
import LikeIcon from "../../public/like_24.svg";

import styles from "./LikeButton.module.css";

export interface LikeButtonProps {
  postId: number;
  onClick: (postId: number, isLiked: boolean) => Promise<void>;
}

export const LikeButton: FC<LikeButtonProps> = ({ postId, onClick }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const onLikeClick = async () => {
    setIsLiked((currentState) => !currentState);
    onClick(postId, !isLiked);
  };

  return (
    <button
      type="button"
      className={cn(styles.root, {
        [styles.liked]: isLiked,
      })}
      onClick={onLikeClick}
    >
      <LikeIcon />
    </button>
  );
};
