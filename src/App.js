import React from 'react'
import './App.css';


// extra frameworks OR Libraries => 
import Particles from 'react-particles-js';



// Components => 
import Icons from "./components/icons/icons"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Projects from './components/projects/projects';
import Contact from "./components/contact/contact";

function App() {

  return (
    <>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
          <Particles id="particle-canvas"
              params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 2.8
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
            <Home />
            <Icons  />
          </div>
          <div class="slide two"><About /></div>
          <div class="slide three" ><Projects /> </div>
          <div class="slide four"> <Contact /></div>

        </div>
      </div>

    </>
  );
}

export default App;


