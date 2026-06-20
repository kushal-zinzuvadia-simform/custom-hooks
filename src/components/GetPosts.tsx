import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { BASE } from "../types/Fetch";
import { FetchStatus } from "./FetchStatus";

export function GetPosts() {
  const [skip, setSkip] = useState(false);

  const { isLoading, data, error, refetch } = useFetch(`${BASE}/posts`, {
    skip,
  });

  return (
    <section className="rounded border border-gray-200 bg-white p-4">
      <h2 className="mb-3 font-semibold">GET Posts</h2>

      <label className="mb-3 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={skip}
          onChange={(e) => setSkip(e.target.checked)}
          className="h-4 w-4"
        />
        Skip Request
      </label>

      <button
        onClick={refetch}
        disabled={isLoading || skip}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white disabled:opacity-50 hover:bg-blue-700 cursor-pointer disabled:cursor-not-allowed"
      >
        Fetch
      </button>

      {skip ? (
        <p className="mt-2 text-sm text-gray-500">Request is skipped.</p>
      ) : (
        <FetchStatus isLoading={isLoading} error={error} data={data} />
      )}
    </section>
  );
}
