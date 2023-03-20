import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./Pages/HOME/Home";
import Contact from "./Pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Donate from "./Pages/Donate/Donate";
import Join from "./Pages/Join/Join";
import {About} from "./Pages/About/About";

// ..
AOS.init();


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/join" element={<Join/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
