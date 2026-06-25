// Practical-15

// OUTPUT: Assuming we are clicking button twice

// Component rendered. Clicks: 0, Render Count Tracker: 1
// Component rendered. Clicks: 1, Render Count Tracker: 2
// Component rendered. Clicks: 2, Render Count Tracker: 3

// 3 sec after first click,
// Closure State: 0
// Mutable Ref: 1
// Render Count: 3

// 3 sec after second click,
// Closure State: 1
// Mutable Ref: 2
// Render Count: 4

import React, { useState, useRef, useEffect } from "react";

export const MysteryBox: React.FC = () => {
  const [clicks, setClicks] = useState<number>(0);

  const renderCount = useRef<number>(1);
  const latestClicks = useRef<number>(clicks);

  useEffect(() => {
    latestClicks.current = clicks;
  });

  const handleHeavyClick = () => {
    setClicks((prev) => prev + 1);

    setTimeout(() => {
      console.log(`Closure State: ${clicks}`);
      console.log(`Mutable Ref: ${latestClicks.current}`);
      console.log(`Render Count: ${renderCount.current}`);
      console.log("---");
    }, 3000);
  };

  console.log(
    `Component rendered. Clicks: ${clicks}, Render Count Tracker: ${renderCount.current}`,
  );

  renderCount.current += 1;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleHeavyClick}>Click Me</button>
    </div>
  );
};
