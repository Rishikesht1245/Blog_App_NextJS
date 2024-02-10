import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/blog_about.png" alt="About image" fill />
      </div>
    </div>
  );
};
export default AboutPage;
