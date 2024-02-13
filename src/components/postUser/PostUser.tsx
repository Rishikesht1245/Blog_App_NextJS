import styles from "./postuser.module.css";

const getData = async (userId: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
const PostUser = async ({ userId }: { userId: number }) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>User name</span>
    </div>
  );
};
export default PostUser;
