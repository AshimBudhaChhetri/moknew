import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Aboutpage from "./components/AboutPage/Aboutpage";
import Services from "./components/Services/Services";
import Contactpage from "./components/Contact/Contactpage";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Publications from "./components/Publications/Publications";
import Team from "./components/Team/Team";
import PublicationDetail from "./components/Publications/PublicationDetail";
import ServicesDetail from "./components/Services/ServicesDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<PublicationDetail />} />
        <Route path="/services/:serviceId" element={<ServicesDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
