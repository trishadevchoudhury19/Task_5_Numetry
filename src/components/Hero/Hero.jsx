import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Myself TRISHA</h1>
        <p className={styles.description}>
        I am SOFTWARE DEVELOPER INTERN at Numetry Technologies!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Call-To-Action
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        // alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};