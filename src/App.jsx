// SETUP ROUTES
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-Section/Hero";
import AboutUsMain from "./components/About-usMain/About-usMain";
import MainProductBody from "./components/Product-Section/MainProductBody";
import MainPage from "./components/ViewProduct/MainPage";
import ContactHeading from "./components/ContactSection/ContactHeading";
import Main from "./components/PartnerWithUsPage/Main"
import ScrollToTop from "./components/ScrollTotop";
import Footer from "./components/Footer/Footer";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUsMain />} />
          <Route path="/Products" element={<MainProductBody />} />
          <Route path="/viewProduct/:CASNo" element={<MainPage />} />
          <Route path="/Contact" element={<ContactHeading />} />
        </Routes>
      </BrowserRouter >
      <Footer />
    </>
  );
} 
