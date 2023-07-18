"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Início",
    url: "/",
  },
  {
    id: 2,
    title: "Recursos",
    url: "/portfolio",
  },
  
  {
    id: 3,
    title: "Sobre nós",
    url: "/about",
  },
  {
    id: 4,
    title: "Contato",
    url: "/contact",
  },
  {
    id: 5,
    title: "Abrir Painel",
    url: "http://localhost:3000/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Convite Digital
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {!session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
