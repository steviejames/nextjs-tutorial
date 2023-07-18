import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url, blank, target }) => {
  return (
    <Link href={url} target={target&&target}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
