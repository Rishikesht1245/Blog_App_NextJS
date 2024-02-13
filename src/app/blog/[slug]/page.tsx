// Single Post page
import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
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
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>User name</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>19-11-2000</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          repellat iure quam, voluptas ipsa at ullam temporibus omnis quidem,
          porro laborum voluptatem molestiae eveniet possimus ducimus odio
          harum, qui aperiam saepe unde. Dolorem hic fugiat minus non sed dolore
          qui nemo omnis quos delectus excepturi, dicta iusto nihil a? Eos ipsam
          dolores, esse quis eaque deserunt error excepturi ducimus voluptates
          porro beatae. In quia, asperiores dignissimos voluptatibus dicta
          pariatur! Deserunt voluptates cum voluptatibus adipisci molestias quo
          nobis laboriosam non sapiente culpa eius cupiditate perspiciatis
          ipsam, ea corrupti, aperiam iusto consequatur tenetur voluptate
          nesciunt doloribus dolores ipsa. Consequatur in eius aliquam!
        </div>
      </div>
    </div>
  );
}
