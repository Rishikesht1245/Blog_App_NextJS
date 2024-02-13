import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ item }: { item: any }) => {
  return (
    <div className={styles.container}>
      {/* top section */}
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/7674911/pexels-photo-7674911.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>19/11/2000</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.para}>{item?.description}</p>
        <Link className={styles.link} href={`/blog/${item.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
