import { FC } from "react";
import { BlogCard, BlogCardProps } from "@/components";

import styles from "./Blog.module.css";

export interface BlogProps {
  posts: BlogCardProps[];
}

export const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <div className={styles.root}>
      {posts.map((el) => (
        <div key={el.title} className={styles.wrapper}>
          <BlogCard {...el} />
        </div>
      ))}
    </div>
  );
};
