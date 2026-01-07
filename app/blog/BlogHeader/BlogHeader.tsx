import { FC } from "react";
import GithubIcon from "./github.svg";
import styles from "./BlogHeader.module.css";
import Link from "next/link";

export const BlogHeader: FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.title}>.my_blog</div>
      <Link className={styles.link} href="https://github.com">
        <GithubIcon />
      </Link>
    </header>
  );
};
