import { useCallback, useEffect, useState } from "react";
import type { FetchState, UseFetchOptions } from "../types/Fetch";

export function useFetch<TData = unknown, TPayload = unknown>(
  url: string,
  { method = "GET", payload, skip = false }: UseFetchOptions<TPayload> = {},
) {
  const [state, setState] = useState<FetchState<TData>>({
    isLoading: false,
    data: null,
    error: null,
  });

  const execute = useCallback(async () => {
    if (skip) return;

    setState({
      isLoading: true,
      data: null,
      error: null,
    });

    try {
      const hasBody = method !== "GET" && method !== "DELETE";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body:
          hasBody && payload !== undefined
            ? JSON.stringify(payload)
            : undefined,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = res.status === 204 ? null : ((await res.json()) as TData);

      setState({
        isLoading: false,
        data: data,
        error: null,
      });
    } catch (err) {
      setState({
        isLoading: false,
        data: null,
        error: err instanceof Error ? err.message : "An unknown error occurred",
      });
    }
  }, [url, method, payload, skip]);

  useEffect(() => {
    execute();
  }, [execute]);

  return {
    ...state,
    refetch: execute,
  };
}
