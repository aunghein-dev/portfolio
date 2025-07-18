import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import ScrollToTop from "./util/ScrollToTop.jsx";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 h-22 w-full z-50 bg-white/0.5 backdrop-blur-lg"></div>
      <ScrollToTop />
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
