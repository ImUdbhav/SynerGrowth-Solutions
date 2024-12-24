
import { Routes, Route } from 'react-router-dom';
import ContactPage from "./Pages/ContactPage"
import Home from "./Pages/Home";
import ServicesPage from "./Pages/Services";
import Navbar from "./Navbar";
import Footer from "./Footer";




function App() {
 

  return (
    <>
<Navbar/>
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        
        </Routes>
        
        
       <Footer/>
          </>
  )
}

export default App





