import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useState,
  KeyboardEvent,
} from "react";
import cn from "classnames";
import StarIcon from "./star.svg";

import styles from "./Rating.module.css";

const STARS_QUANTITY = 10;

export interface RatingProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  isEditable?: boolean;
  currentRating?: number;
  changeCurrentRating?: (rating: number) => void;
}

export const Rating: FC<RatingProps> = ({
  className,
  isEditable = false,
  currentRating = 0,
  changeCurrentRating,
  ...restProps
}) => {
  const [hoverRating, setHoverRating] = useState<number>(currentRating);

  const displayRating = hoverRating ?? currentRating;

  const setRatingIfEditable = (r: number) => {
    if (!isEditable) return;

    if (changeCurrentRating) {
      changeCurrentRating(r);
    }
  };

  return (
    <div
      className={cn(className, styles.rating, {
        [styles.editable]: isEditable,
      })}
      {...restProps}
    >
      {Array(STARS_QUANTITY)
        .fill(0)
        .map((_, i) => (
          <span
            key={i}
            onMouseOver={() => setHoverRating(i + 1)}
            onMouseOut={() => setHoverRating(currentRating)}
            className={cn(styles.star, {
              [styles.filled]: i < displayRating,
            })}
            onClick={() => setRatingIfEditable(i + 1)}
          >
            <StarIcon
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                e.code === "Space" && setRatingIfEditable(i + 1)
              }
              tabIndex={isEditable ? 0 : -1}
              onFocus={() => setHoverRating(i + 1)}
            />
          </span>
        ))}
    </div>
  );
};
