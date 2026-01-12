"use client";

import { Rating, LikeButton, Like } from "@/components";
import { useState } from "react";
import { withLayout } from "./layout/Layout";

function Home() {
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

export default withLayout(Home);

async function updatePostLikeState(postId: number, isLiked: boolean) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PATCH",
    body: JSON.stringify({
      liked: isLiked,
    }),
  });
}
