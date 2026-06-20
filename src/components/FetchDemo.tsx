import { useState } from "react";
import { Posts } from "./Posts";

export function FetchDemo() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div>
      <button onClick={() => setShowPosts((prev) => !prev)}>
        {showPosts ? "Unmount Component" : "Mount Component"}
      </button>

      <hr />

      {showPosts && <Posts />}
    </div>
  );
}
