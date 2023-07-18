import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Convite Digital . Contato",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vamos Manter o Contato</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="mensagem"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Enviar"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
