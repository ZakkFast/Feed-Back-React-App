import React from "react";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
// import ReactDOM from "react-dom";
import './index.css'
import App from "./App";

// No longer supported I guess?
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
