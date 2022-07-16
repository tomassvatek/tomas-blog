import { trpc } from "../../utils/trpc";

export default function Posts() {
  const posts = trpc.useQuery(["post.getAll"]);

  return (
    <div>
      <h1>Posts</h1>
      <p>This is the posts page</p>
    </div>
  );
}
