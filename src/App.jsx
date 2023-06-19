import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

// import Work from "./components/Work";
// import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Work />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
