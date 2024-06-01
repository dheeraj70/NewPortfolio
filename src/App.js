
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {

  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <>
    <Nav about = {about} projects={projects} contact={contact}/>
    <Hero/>
    <About about_Ref = {about}/>
    <Projects projects_Ref={projects}/>
    <Contact contact_Ref={contact}/>
    </>
  );
}

export default App;
