import { useFetch } from "../hooks/useFetch";
import { useSubmit } from "../hooks/useSubmit";
import { BASE } from "../types/Fetch";
import { FetchStatus } from "./FetchStatus";
import { SubmitButton } from "./SubmitButton";

export function DeletePost() {
  const { submitted, handleSubmit } = useSubmit();

  const { isLoading, data, error } = useFetch(`${BASE}/posts/1`, {
    method: "DELETE",
    skip: !submitted,
  });

  return (
    <section className="rounded border border-gray-200 bg-white p-4">
      <h2 className="mb-3 font-semibold">Delete Post (DELETE)</h2>
      <SubmitButton
        label="Delete"
        disabled={isLoading || submitted}
        variant="red"
        type="button"
        onClick={handleSubmit}
      />
      <FetchStatus
        isLoading={isLoading}
        error={error}
        // DELETE responses return an empty body, so fall back to {} to signal success to FetchStatus.
        data={submitted && !isLoading && !error ? (data ?? {}) : null}
      />
    </section>
  );
}
