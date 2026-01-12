import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { format } from "date-fns";

import styles from "./Footer.module.css";
import Link from "next/link";

export interface FooterProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {}

export const Footer: FC<FooterProps> = ({ className, ...rest }) => {
  return (
    <footer className={cn(styles.root, className)} {...rest}>
      <div>{`OwlTop 2020-${format(new Date(), "yyyy")} Все права защищены`}</div>
      <Link href="#" target="_blank">
        Пользовательское соглашение
      </Link>
      <Link href="#" target="_blank">
        Политика конфиденциальности
      </Link>
    </footer>
  );
};
