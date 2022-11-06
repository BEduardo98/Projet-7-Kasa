import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import "./index.scss";
import Accueil from "./pages/Accueil";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logements from "./pages/Logements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logements />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
