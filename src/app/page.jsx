import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Crie convites digitais para o seu evento!
        </h1>
        <p className={styles.desc}>
        Nossa plataforma intuitiva oferece uma maneira fácil e conveniente de criar, enviar e gerenciar convites para todos os tipos de eventos. 
        </p>
        <Button url="/portfolio" text="Saber mais"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
