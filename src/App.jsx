// SETUP ROUTES
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-Section/Hero";
import AboutUsMain from "./components/About-usMain/About-usMain";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUsMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
} 
