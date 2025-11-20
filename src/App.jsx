import "./App.css";
import AboutMe from "./components/AboutMe";
import ExperianceSection from "./components/ExperianceSection";
import FloatingButton from "./components/FloatingButton";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="bg-background">
      <Hero />
      <ExperianceSection />
      <Projects />
      <Slider />
      <AboutMe />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
