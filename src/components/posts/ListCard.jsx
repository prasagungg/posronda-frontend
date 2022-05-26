import React from "react";
import PostCard from "./PostCard";

function ListCard() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default ListCard;
