import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
export default async function BlogPage() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts?.map((post: any) => (
        <div className={styles.post}>
          <PostCard item={post} />
        </div>
      ))}
    </div>
  );
}
