// Single Post page
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

// const getData = async (id: number) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   const data = await res.json();
//   return data;
// };

export default async function SinglePostPage({ params }: { params: any }) {
  // const post = await getData(Number(params?.slug)!);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/7674911/pexels-photo-7674911.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7674911/pexels-photo-7674911.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
            width={40}
            height={40}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={1} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>19-11-2000</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          praesentium tenetur. Suscipit totam ratione possimus, id enim
          obcaecati necessitatibus provident? Unde harum aliquid numquam,
          tenetur magnam nemo, optio quaerat est rem temporibus possimus rerum
          inventore neque dignissimos quidem debitis omnis! Voluptates mollitia
          fugiat voluptatum adipisci ad aspernatur perferendis itaque molestias!
        </div>
      </div>
    </div>
  );
}
