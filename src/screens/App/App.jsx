/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: App.jsx
 * Description: Deafult App screen
 */

/* --------------------------------------------- */

/** Libraries */
import React from "react";
import { Routes, Route } from "react-router-dom";

/** Components */
import Home from "../Home/Home";
import About from "../About/About";

/** Styles */
import styles from "./App.scss";

/* --------------------------------------------- */

/**
 * @function App
 * @description Renders App component
 * @returns {JSX}
 */
const App = () => {
   return (
      <div className={styles.appContainer}>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
         </Routes>
      </div>
   );
};

/* --------------------------------------------- */

/** @export @default component */
export default App;
