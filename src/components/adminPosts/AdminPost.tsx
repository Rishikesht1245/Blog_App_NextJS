import { getPosts } from "@/lib/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import { MdDelete } from "react-icons/md";

const AdminPost = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div className={styles.post} key={post?.id}>
          <div className={styles.detail}>
            <Image
              src={post?.img || "/images/noAvatar.png"}
              width={50}
              height={50}
              alt="Post Image"
            />
            <span className={styles.postTitle}>{post?.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post?.id} />
            <button className={styles.postButton}>
              <MdDelete />
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminPost;
