/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: About.jsx
 * Description: About screen
 */

/* --------------------------------------------- */

/** Libraries */
import React from "react";

/** Styles */
import styles from "./About.scss";

/* --------------------------------------------- */

/**
 * @function About
 * @description Renders About component
 * @returns {JSX}
 */
const About = () => {
   return (
      <div className={styles.aboutContainer}>
         <h1>About</h1>
      </div>
   );
};

/* --------------------------------------------- */

/** @export @default component */
export default About;
