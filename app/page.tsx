"use client";

import { Rating } from "@/components";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Rating
        currentRating={rating}
        isEditable
        changeCurrentRating={(r) => setRating(r)}
      />
    </>
  );
}
