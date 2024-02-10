import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        BlogiFy
      </Link>
      <div className={styles.text}>
        BlogiFy &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
