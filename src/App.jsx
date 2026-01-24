// SETUP ROUTES
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-Section/Hero";
import AboutUsMain from "./components/About-usMain/About-usMain";
import MainProductBody from "./components/Product-Section/MainProductBody";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUsMain />} />
          <Route path="/Products" element={<MainProductBody />} />
        </Routes>
      </BrowserRouter>
    </>
  );
} 
