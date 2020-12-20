import './App.css';
import React from 'react'
import Todos from "./components/Todos"
import Particles from 'react-particles-js';



function App() {
  return (
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
          <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
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
          </div>
          <div class="slide two"></div>
          <div class="slide three"></div>
        </div>
      </div>
  );
}

export default App;


