import "./App.css";
import Header from "./components/Header/Header";
import "./assets/js/script";
import { motion } from "framer-motion";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Features />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
