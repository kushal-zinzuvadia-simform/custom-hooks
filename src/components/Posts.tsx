import { useFetch } from "../hooks/useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const { data, error, isLoading, refetch } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <button onClick={refetch}>Refetch</button>

      <ul>
        {data?.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
