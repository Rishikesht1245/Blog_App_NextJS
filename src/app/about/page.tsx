import Image from "next/image";
import styles from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "The perfect app for blogging",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About BlogiFy</h2>
        <h1 className={styles.title}>
          We Create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.para}>
          Welcome to our blog app, your go-to destination for insightful content
          and engaging stories. Whether you're a seasoned reader or a budding
          writer, our platform offers a seamless experience for discovering,
          sharing, and connecting with a diverse community of like-minded
          individuals. From thought-provoking articles to practical tips and
          everything in between, there's something here for everyone. Join us as
          we embark on a journey of discovery and inspiration. Happy reading!
        </p>
        {/* Boxes */}
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>100 K+</h1>
            <p>Trusted Users</p>
          </div>
          <div className={styles.box}>
            <h1>100 +</h1>
            <p>Valuable Partners </p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="/images/about.png"
          alt="About image"
          fill
        />
      </div>
    </div>
  );
};
export default AboutPage;
