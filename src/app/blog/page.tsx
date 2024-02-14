import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";

// FETCHING DATA USING API
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

export const metadata: Metadata = {
  title: "Blog page",
  description: "The perfect app for blogging",
};

export default async function BlogPage() {
  // const posts = await getData();

  // FETCHING DATA WITHOUT API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts?.map((post: any) => (
        <div className={styles.post} key={post?.id}>
          <PostCard item={post} />
        </div>
      ))}
    </div>
  );
}
