import { BlogCard, Button, Htag, Like, Paragraph, Tag } from "@/components";

export default function Home() {
  return (
    <>
      <BlogCard
        imageSrc="/iStock-1389408771.jpg"
        imageAlt="Blog post image preview"
        theme="Front-end"
        title="Как работать с CSS Grid"
        text="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы и небольших элементов пользовательского интерфейса."
        href="https://www.example.com"
        readTime={3}
        date={new Date(2024, 5, 12)}
      />
    </>
  );
}
