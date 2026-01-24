import { Blog } from "./Blog";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <>
      <Blog posts={posts} />
    </>
  );
}
