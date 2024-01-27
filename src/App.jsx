import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./Pages/NotFound/NotFound"
import LandingPage from "./Pages/MainLandingPage/LandingPage"
import ContactUs from "./Pages/ContactUs/ContactUs"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Gallery from "./Pages/Gallery/Gallery"
import FAQ from "./Pages/FAQ/FAQ"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Footer2 from "./Components/Footer2"
import Footer3 from "./Components/Footer3"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="aboutus" element={<AboutUs /> } />
        <Route path="contactus" element={<ContactUs /> } />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="/footer2" element={<Footer2/> } />
        <Route path="/footer3" element={<Footer3 />} />

        <Route path="*" element = {< NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
