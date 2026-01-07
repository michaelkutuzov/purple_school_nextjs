"use client";

import { Rating, LikeButton, Like } from "@/components";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Like />
      <LikeButton postId={1} onClick={updatePostLikeState} />
      <Rating
        currentRating={rating}
        isEditable
        changeCurrentRating={(r) => setRating(r)}
      />
    </>
  );
}

async function updatePostLikeState(postId: number, isLiked: boolean) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PATCH",
    body: JSON.stringify({
      liked: isLiked,
    }),
  });
}
