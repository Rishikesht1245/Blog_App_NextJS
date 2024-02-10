import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Let Your Imaginations Soar</h1>
        <p className={styles.para}>
          Dive into a treasure trove of insights, stories, and ideas! 🌟 Join
          our thriving community of writers and readers as we embark on a
          journey of discovery together. From thought-provoking discussions to
          practical tips, there's something here for everyone. Click, read, and
          let your imagination soar! ✨
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/images/brands.png"}
            alt="brand image"
            fill
            className={styles.branding}
          />
        </div>
      </div>
      {/* Right side section starts here  */}
      <div className={styles.imageContainer}>
        <Image src={"/images/hero.gif"} alt="Hero image" fill />
      </div>
    </div>
  );
}
