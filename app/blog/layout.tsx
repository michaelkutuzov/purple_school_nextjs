import type { Metadata } from "next";
import { BlogHeader } from "./BlogHeader";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      {children}
    </>
  );
}
