import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;