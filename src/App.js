import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./Pages/HOME/Home";
import Sunday from "./Pages/EventDetails/Sunday";
import Contact from "./Pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Friday from "./Pages/EventDetails/Friday";
import Donate from "./Pages/Donate/Donate";
import Join from "./Pages/Join/Join";
import {About} from "./Pages/About/About";
import ErrorBoundary from './component/ErrorBoundary';
import Blog from "./component/Blog";
import BlogPost from "./component/BlogPost";

// ..
AOS.init();


function App() {
  return (
    <>
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sunday-service" element={<Sunday/>} />
          <Route path="/PUSH-Prayer" element={<Friday />} />
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/join" element={<Join/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:slug" element={<BlogPost/>} />
        </Routes>
        <Footer/>
      </Router>
    </ErrorBoundary>
      
    </>
  );
}

export default App;
