"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const navLink = ({
  link,
  onClick,
}: {
  link: { title: string; path: string };
  onClick: any;
}) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
      href={link?.path}
      onClick={onClick}
    >
      {link?.title}
    </Link>
  );
};
export default navLink;
