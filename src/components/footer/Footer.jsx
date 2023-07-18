import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Copyriht © 2023 Convite Digital. Todos direitos reservados.</div>
      <div className={styles.social}>
      <Link href={"facebook.com/convite-digital"} target="_blank">
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Convitr Digital" />
      </Link>
      <Link href={"facebook.com/convite-digital"} target="_blank">
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Convitr Digital" />
      </Link>
      <Link href={"facebook.com/convite-digital"} target="_blank">
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Convitr Digital" />
      </Link>
      <Link href={"facebook.com/convite-digital"} target="_blank">
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Convitr Digital" />
      </Link>
      
      </div>
    </div>
  );
};

export default Footer;
