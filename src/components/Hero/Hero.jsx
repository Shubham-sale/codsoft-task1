import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shubham</h1>
        <p className={styles.description}>
          I am a FullStack Developer with experience building web based
          projects. One of my biggest strengths is the development and
          delivering big ideas that amaze people's minds.
        </p>
        <a href="mailto:shubhamsaleofficial@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimg.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
