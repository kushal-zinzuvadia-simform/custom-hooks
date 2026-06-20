export function FetchStatus({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean;
  error: string | null;
  data: unknown;
}) {
  if (isLoading)
    return <p className="mt-2 text-sm text-gray-500">Loading...</p>;
  if (error) return <p className="mt-2 text-sm text-red-600">Error: {error}</p>;
  if (data != null)
    return (
      <pre className="mt-3 max-h-60 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-3 text-xs whitespace-pre-wrap break-all">
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  return null;
}
