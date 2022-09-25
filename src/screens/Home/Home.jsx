/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: Home.jsx
 * Description: Home screen
 */

/* --------------------------------------------- */

/** Libraries */
import React from "react";

/** Styles */
import styles from "./Home.scss";

/* --------------------------------------------- */

/**
 * @function Home
 * @description Renders Home component
 * @returns {JSX}
 */
const Home = () => {
   return (
      <div className={styles.homeContainer}>
         <h1>Home</h1>
      </div>
   );
};

/* --------------------------------------------- */

/** @export @default component */
export default Home;
