type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const BASE = "https://jsonplaceholder.typicode.com";

export interface UseFetchOptions<TPayload> {
  method?: HttpMethod;
  payload?: TPayload;
  headers?: HeadersInit;
  skip?: boolean;
}

export interface FetchState<TData> {
  isLoading: boolean;
  data: TData | null;
  error: string | null;
}
