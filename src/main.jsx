import React from "react";
import ReactDOM from "react-dom/client";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AOS from "aos";
AOS.init();

//Import Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import ArtStuff from "./pages/ArtStuff";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Lost";

//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/style.css";

let path = window.location.pathname;
if (path === "/") {
  path = "Portfolio";
}else{
  path = path.replace("/", "");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <title>Daphné Augier UI/UX and Web Designer in Montréal | {path}</title>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:title" content={`Daphné Augier - UI/UX and Web Designer - ${path}`} /> 
          <meta property="og:url" content={window.location.href} /> 
          </Helmet>
      </HelmetProvider>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/work/:workId" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<ArtStuff />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/lost" element={<Error />} />
            <Route path="*" element={<Navigate to="/lost" replace />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
