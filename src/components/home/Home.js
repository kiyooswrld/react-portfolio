import React from 'react'
import "./home.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



function Home() {
  
  return (
    <>
      <div class="todos">
        <h1>Hello, I <span class="blue">am</span></h1>
        <h2>Kiyoo</h2>
        <a href="#about">Get to know me<ArrowRightAltIcon fontSize="large"/></a>
      </div>
    </>
  );
}

export default Home;
