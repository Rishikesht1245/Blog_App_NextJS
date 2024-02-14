import { addPost, deletePost } from "@/lib/actions";

const ActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="description" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="UserId" name="userId" />
        <button>Create Post</button>
      </form>

      <h1>Delete Post</h1>
      <form action={deletePost}>
        <input type="text" placeholder="Post ID" name="id" />

        <button>Delete Post</button>
      </form>
    </div>
  );
};
export default ActionTestPage;
