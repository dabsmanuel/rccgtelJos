import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./Pages/HOME/Home";
import Contact from "./Pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {About} from "./Pages/About/About";
import Blogs from "./Pages/blogs/Blogs";
import Details from "./Pages/blogs/Details";

// ..
AOS.init();


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/details/:id" element={<Details/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
