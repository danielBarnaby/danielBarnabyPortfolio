import './App.css';
import './index.css';
import Header from './components/header/Header';
// import NavBar from './components/navBar/NavBar';
import Nav from './components/nav/Nav'
import About from './components/about/About';
// import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Nav />
    {/* <NavBar/> */}
    <About />
    {/* <Skills /> */}
    <Experience />
    <Services />
    <Portfolio />
    {/* <Contact /> */}
    {/* <Footer /> */}
    </>
  )
}

export default App;
