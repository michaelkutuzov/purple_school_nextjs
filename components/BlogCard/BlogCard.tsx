import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import plural from "plural-ru";
import { Htag, Like, Paragraph } from "..";
import ArrowIcon from "./arrow.svg";

import styles from "./BlogCard.module.css";
import { formatRelativeTime } from "@/utils/timeAgo";

export interface BlogCardProps {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  theme: string;
  date: Date;
  title: string;
  text: string;
  readTime: number;
  likesCount?: number;
  href: string;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const {
    className,
    imageSrc,
    imageAlt,
    theme,
    title,
    text,
    likesCount,
    readTime = 1,
    href,
    date,
  } = props;

  return (
    <section className={cn(className, styles["blog-card"])}>
      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles["card-header"]}>
        <div className={styles["post-info"]}>
          <span className={styles.theme}>{theme}</span>
          <span className={styles.dot}>{"\u2022"}</span>
          <span className={styles.date}>{formatRelativeTime(date)}</span>
        </div>
        <Like count={likesCount} />
      </div>
      <Htag className={styles.header} tag="h4">
        {title}
      </Htag>
      <Paragraph className={styles.paragraph} size="xs">
        {text}
      </Paragraph>
      <div className={styles["card-footer"]}>
        <div className={styles["read-time"]}>
          {`${readTime} ${plural(readTime, "минута", "минуты", "минут")}`}
        </div>
        <Link className={styles.link} href={href}>
          <span>Читать</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
};
