type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface UseFetchOptions<TPayload> {
  method?: HttpMethod;
  payload?: TPayload;
  skip?: boolean;
}

export interface FetchState<TData> {
  isLoading: boolean;
  data: TData | null;
  error: string | null;
}
