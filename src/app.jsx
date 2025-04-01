import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

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

import worksEn from "./data/en/works.json"
import worksFr from './data/fr/works.json'
import dataEn from './data/en/art.json'
import dataFr from './data/fr/art.json'

import { LanguageContext, languages } from "./contexts/languages";   

function App() {
  const [ lang, setLang] = useState(languages.en)
  const works = lang === 'en' ? worksEn : worksFr
  const data = lang === 'en' ? dataEn : dataFr
  
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
    <BrowserRouter>
        <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home works={works}/>} />
                    <Route path="/work/:workId" element={<Work workList={works}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/art" element={<ArtStuff data={data} />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/lost" element={<Error />} />
                    <Route path="*" element={<Navigate to="/lost" replace />} />
                </Routes>
            </main>
        <Footer />
    </BrowserRouter>
    </LanguageContext.Provider>
 )
}

export default App