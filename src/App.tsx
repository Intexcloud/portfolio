import Nav from './components/Nav';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import DashboardAI from './components/DashboardAI';
import SQLSection from './components/SQLSection';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Canvas3D from './components/Canvas3D';

export default function App() {
    return (
        <>
            <Canvas3D />
            <Nav />
            <Hero />
            <Dashboard />
            <DashboardAI />
            <SQLSection />
            <Projects />
            <Certifications />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </>
    );
}
