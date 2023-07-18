import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { APP_URL } from "@/config/consts";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Conheça a Convite Digital</h1>
          <h2 className={styles.imgDesc}>
          Simplificando o processo de criar, compartilhar e gerenciar convites para eventos especiais
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Quem Somos?</h1>
          <p className={styles.desc}>
            Na Convite Digital, somos especializados em convites digitais
            interativos e personalizados. Nosso objetivo é proporcionar uma
            experiência única e envolvente desde o momento em que um convite é
            recebido. Com nossa plataforma intuitiva e recursos avançados,
            tornamos a criação, o compartilhamento e o gerenciamento de convites
            digitais simples e convenientes. Conte conosco para tornar seu
            evento ainda mais especial!
            <br />
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>O Que Fazemos?</h1>
          <p className={styles.desc}>
            Na Convite Digital, oferecemos uma plataforma online que permite
            criar, enviar e gerenciar convites digitais interativos para
            eventos. Com nossa solução prática e personalizada, você pode criar
            convites atrativos e adaptados ao estilo e tema do seu evento. Nossa
            plataforma é projetada para ser fácil de usar, oferecendo recursos
            interativos e opções de personalização. Simplificamos o processo de
            convidar seus convidados, garantindo uma experiência memorável desde
            o primeiro contato.
            <br />
          </p>
          <Button url={APP_URL} text="Fale Conosco" />
        </div>
      </div>
    </div>
  );
};

export default About;
