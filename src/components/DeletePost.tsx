import { useFetch } from "../hooks/useFetch";
import { useSubmit } from "../hooks/useSubmit";
import { BASE } from "../types/fetch";
import { FetchStatus } from "./FetchStatus";

export function DeletePost() {
  const { submitted, handleSubmit } = useSubmit();

  const { isLoading, data, error } = useFetch(`${BASE}/posts/1`, {
    method: "DELETE",
    skip: !submitted,
  });

  return (
    <section className="rounded border border-gray-200 bg-white p-4">
      <h2 className="mb-3 font-semibold">Delete Post (DELETE)</h2>
      <button
        onClick={handleSubmit}
        disabled={isLoading || submitted}
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white disabled:opacity-50 hover:bg-red-700 cursor-pointer disabled:cursor-not-allowed"
      >
        Delete
      </button>
      <FetchStatus
        isLoading={isLoading}
        error={error}
        data={submitted && !isLoading && !error ? (data ?? {}) : null}
      />
    </section>
  );
}
