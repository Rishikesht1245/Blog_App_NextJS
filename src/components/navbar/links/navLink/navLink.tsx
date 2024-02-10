"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const navLink = ({ link }: { link: { title: string; path: string } }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
      href={link?.path}
    >
      {link?.title}
    </Link>
  );
};
export default navLink;
