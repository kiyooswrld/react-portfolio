import React from 'react'
import "./About.css"

// Icons 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



function About() {
  
  return (
    <div id="about">
    <h1 id="whoami">Who Am I?</h1>
    <h2 id="journey">My Journey</h2>
    <p id="aboutme">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias rerum fugiat unde voluptatem pariatur, placeat aliquam nam repudiandae nihil aliquid dolorum quos cum hic dignissimos neque blanditiis. Quae libero animi eos, expedita distinctio minus perferendis repellat commodi, quidem assumenda suscipit vero, aliquam eveniet temporibus a. Culpa quisquam consequatur minus dolore dolores quae nihil assumenda libero quos deserunt aliquam, magnam, accusamus sapiente ipsa hic doloribus sunt cumque modi vitae est amet placeat at! Nobis dolorem, unde recusandae rem tempore officiis eligendi reprehenderit odit ratione qui culpa ea in sapiente ullam ad tenetur nemo quisquam corrupti sint accusantium nam. Quasi, sunt!</p>
    <div className="prevnext">
        <a href="#home"><ArrowRightAltIcon style={{transform: "rotate(180deg)"}} fontSize="large"/> Previous</a>
        <a href="#about"> Projects <ArrowRightAltIcon fontSize="large"/></a>

    </div>
    </div>
  );
}

export default About;
