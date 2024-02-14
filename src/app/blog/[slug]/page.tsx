// Single Post page
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { Metadata } from "next";

//generate metadata function for dynamic meta data
export const generateMetadata = async ({ params }: { params: any }) => {
  const post = await getPost(params?.slug!);

  return {
    title: post.title,
    description: post.description.slice(0, 10),
  };
};

// FETCHING DATA USING API
const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};
export default async function SinglePostPage({ params }: { params: any }) {
  const post = await getData(params?.slug);

  //FETCHING DATA WITHOUT API
  // const post = await getPost(params?.slug!);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="image" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post?.userId!} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.description}</div>
      </div>
    </div>
  );
}
