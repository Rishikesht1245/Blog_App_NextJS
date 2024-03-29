"use client";
import Link from "next/link";
import NavLink from "./navLink/navLink";
import { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import styles from "./links.module.css";
import { handleLogout } from "@/lib/actions";

const Links = ({ session }: { session: any }) => {
  const [open, setOpen] = useState<boolean>(false);

  const links: { title: string; path: string }[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // Temporary

  const isAdmin: boolean = true;

  return (
    <div className={styles.container}>
      {/* Links */}
      <div className={styles.links}>
        {links?.map((link) => (
          <NavLink
            link={link}
            key={link.title}
            onClick={() => setOpen((prev) => !prev)}
          />
        ))}

        {session && !session?.error ? (
          <>
            {session?.user?.isAdmin && (
              <NavLink
                link={{ title: "Admin", path: "/admin" }}
                onClick={() => setOpen((prev) => !prev)}
              />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>
                <IoMdLogOut className="text-[20px]" />
              </button>
            </form>
          </>
        ) : (
          <NavLink
            link={{ title: "Login", path: "/login" }}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
      </div>

      {/* Button : Hand burger */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <IoCloseSharp /> : <FiMenu />}
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links?.map((link) => (
            <NavLink
              link={link}
              key={link.title}
              onClick={() => setOpen((prev) => !prev)}
            />
          ))}
          {session ? (
            <>
              {session?.user?.isAdmin && (
                <NavLink
                  link={{ title: "Admin", path: "/admin" }}
                  onClick={() => setOpen((prev) => !prev)}
                />
              )}
              <form action={handleLogout}>
                <button className={styles.logout}>
                  <IoMdLogOut className="text-[20px]" />
                </button>
              </form>
            </>
          ) : (
            <NavLink
              link={{ title: "Login", path: "/login" }}
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Links;
