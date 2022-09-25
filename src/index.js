/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: index.jsx
 * Description: Deafult entry for React project
 */

/* --------------------------------------------- */

/** Libraries */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

/** Components */
import App from "./screens/App/App";

/* --------------------------------------------- */

/** Embedding React App in DOM */
render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById("app"),
);
