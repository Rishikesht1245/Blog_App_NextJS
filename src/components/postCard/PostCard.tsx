import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ item }: { item: any }) => {
  return (
    <div className={styles.container}>
      {/* top section */}
      <div className={styles.top}>
        {item.img && (
          <div className={styles.imageContainer}>
            <Image src={item?.img} alt="post" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>19/11/2000</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.para}>{item?.body}</p>
        <Link className={styles.link} href={`/blog/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
