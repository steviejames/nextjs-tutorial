"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { APP_URL } from "@/config/consts";

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
    url: APP_URL,
  },
];

const Navbar = () => {
 

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
      
      </div>
    </div>
  );
};

export default Navbar;
