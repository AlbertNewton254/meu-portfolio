import React from "react";
import ReactDOM from "react-dom/client"; // IMPORTANTE: Use "react-dom/client" no React 18
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
