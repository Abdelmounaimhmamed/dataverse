import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact-us/Contact';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import Sponsor from './components/Sponsors/Sponsor';
import Team from './components/Team/Team';
import Details from './components/details/Details';
import Hero from './components/hero/Hero';
import Navbar from './components/navBar/Navbar';

function App() {
  return (
    <div className="App">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="28, 97, 157"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
            <Navbar  />
            <Hero />
            <About />
            <Team />
            <Details />
            <Sponsor />
            <Contact />
            <Map />
            <Footer /> 
    </div>
  );
}

export default App;
