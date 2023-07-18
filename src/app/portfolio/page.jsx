import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Pronto a simplificar os seus eventos</h1>
      <div className={styles.items}>
        <Link href="/portfolio/creation" className={styles.item}>
          <span className={styles.title}>Criação</span>
        </Link>
        <Link href="/portfolio/manage" className={styles.item}>
          <span className={styles.title}>Gestão</span>
        </Link>
        <Link href="/portfolio/sharing" className={styles.item}>
          <span className={styles.title}>Partilha</span>
        </Link>
       
        
      </div>
    </div>
  );
};

export default Portfolio;
