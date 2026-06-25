// Practical-14 (Fix the code):
// Goal: Analyze the custom hook and the component consuming it.
// Identify the infinite loop, the race condition, and the TypeScript weaknesses.

import React, { useState, useEffect, useMemo } from "react";

type UserStats = {
  stats: string;
};

// A custom hook meant to be reusable for any fetch request
function useFetchData<T>(url: string, options: RequestInit) {
  // assign type to headers
  const [data, setData] = useState<T | null>(null); // Hook should be generic
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController(); // Add abort controller

    const execute = () => {
      setLoading(true);

      fetch(url, { ...options, signal: controller.signal })
        .then((res) => res.json())
        .then((result) => {
          if (!controller.signal.aborted) {
            setData(result);
          }
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            // AbortError should be ignored
            return;
          }

          console.error(err);
        })
        .finally(() => setLoading(false));
    };

    execute(); // Prevent setState synchronously in useEffect

    return () => controller.abort(); // Cancel previous request
  }, [url, options]);

  return { data, loading };
}

interface DashboardProps {
  userId: string;
}

export const StatsDashboard: React.FC<DashboardProps> = ({ userId }) => {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly">("weekly");

  // Fixed infinite loop
  // Makes sure option object remains same between renders
  const options = useMemo<RequestInit>(
    () => ({
      method: "GET",
      headers: {
        "X-Timeframe": timeframe,
      },
    }),
    [timeframe],
  );

  const { data, loading } = useFetchData<UserStats>(
    `https://jsonplaceholder.typicode.com/api/users/${userId}/stats`,
    options,
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Stats</h1>
      <select
        value={timeframe}
        onChange={(e) => setTimeframe(e.target.value as "weekly" | "monthly")}
      >
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
