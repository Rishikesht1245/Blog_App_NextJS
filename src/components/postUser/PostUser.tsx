import { getUser } from "@/lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

// DATA FETCHING WITH API
// const getData = async (userId: number) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${userId}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   const data = await res.json();
//   return data;
// };
const PostUser = async ({ userId }: { userId: number }) => {
  // const user = await getData(userId);

  // DATA FETCHING WITHOUT API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user?.img : "/images/noavatar.png"}
        alt="image"
        width={40}
        height={40}
        className={styles.avatar}
      />

      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
