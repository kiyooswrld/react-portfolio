import './App.css';
import React from 'react'
import Todos from "./components/Todos"
import Particles from 'react-particles-js';
import Icons from "./components/icons"


function App() {
  return (
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
            <Todos />
            <Icons />
          </div>
          <div class="slide two"></div>
          <div class="slide three"></div>
        </div>
      </div>
  );
}

export default App;


