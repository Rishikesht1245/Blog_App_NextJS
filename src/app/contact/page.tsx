import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src={"/images/about.png"}
          alt="contact image"
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action={""} className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (optional)" />
          <textarea
            name=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
