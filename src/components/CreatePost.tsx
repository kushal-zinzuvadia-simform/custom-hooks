import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useSubmit } from "../hooks/useSubmit";
import { BASE } from "../types/Fetch";
import { FetchStatus } from "./FetchStatus";
import { SubmitButton } from "./SubmitButton";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { submitted, handleSubmit, reset } = useSubmit();

  const { isLoading, data, error } = useFetch(`${BASE}/posts`, {
    method: "POST",
    payload: { title, body, userId: 1 },
    skip: !submitted,
  });

  return (
    <section className="rounded border border-gray-200 bg-white p-4">
      <h2 className="mb-3 font-semibold">Create Post (POST)</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            reset();
          }}
          required
          className="rounded border border-gray-300 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            reset();
          }}
          required
          className="min-h-[70px] resize-y rounded border border-gray-300 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <SubmitButton label="Create" disabled={isLoading} />
      </form>
      <FetchStatus isLoading={isLoading} error={error} data={data} />
    </section>
  );
}
