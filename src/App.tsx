import { GetPosts } from "./components/GetPosts";
import { CreatePost } from "./components/CreatePost";
import { UpdatePost } from "./components/UpdatePost";
import { PatchPost } from "./components/PatchPost";
import { DeletePost } from "./components/DeletePost";

export function App() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">useFetch Hook Demo</h1>

      <div className="flex flex-col gap-4">
        <GetPosts />
        <CreatePost />
        <UpdatePost />
        <PatchPost />
        <DeletePost />
      </div>
    </div>
  );
}
