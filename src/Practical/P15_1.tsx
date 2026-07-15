// Practical-15

// OUTPUT:
// 4. Parent: Render
// 1. Child: Render
// 2. Child: Effect Setup
// 5. Parent: Effect Setup
// After button click,
// 4. Parent: Render
// 3. Child: Effect Cleanup
// Finally, parent unmounts
// 6. Parent: Effect Cleanup

import React, { useState, useEffect } from "react";

const Child: React.FC = () => {
  console.log("1. Child: Render");

  useEffect(() => {
    console.log("2. Child: Effect Setup");
    return () => console.log("3. Child: Effect Cleanup");
  }, []);

  return <div>I am the child</div>;
};

export const Parent: React.FC = () => {
  console.log("4. Parent: Render");
  const [showChild, setShowChild] = useState<boolean>(true);

  useEffect(() => {
    console.log("5. Parent: Effect Setup");
    return () => console.log("6. Parent: Effect Cleanup");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {showChild && <Child />}
      <button onClick={() => setShowChild(false)}>Unmount Child</button>
    </div>
  );
};
