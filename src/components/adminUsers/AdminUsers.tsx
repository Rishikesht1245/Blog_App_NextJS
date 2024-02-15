import { getUsers } from "@/lib/data";
import styles from "./adminUser.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import { MdDelete } from "react-icons/md";

const AdminPost = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users?.map((user) => (
        <div className={styles.user} key={user?.id}>
          <div className={styles.detail}>
            <Image
              src={user?.img || "/images/noAvatar.png"}
              width={50}
              height={50}
              alt="Post Image"
            />
            <span className={styles.username}>{user?.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user?.id} />
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
