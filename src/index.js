import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import BoatContextProvider from "./components/BoatContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BoatContextProvider>
    <App />
    </BoatContextProvider>

);
