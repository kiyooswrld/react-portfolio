import React from 'react'
import "./projects.css"

// Icons 
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



import MediaCard from "./cards";
import MediaCard1 from "./cards1"
import MediaCard2 from "./cards2"



function Projects() {
  
  return (
    <div id="projects">
    <h1 id="projectsText">Projects</h1>

    <div className="projectCards">
    <MediaCard />
    <MediaCard1 />
    <MediaCard2 />
    </div>

     <div className="prevnextProjects">  
        <a href="#about"><ArrowRightAltIcon style={{transform: "rotate(180deg)"}} 
        fontSize="large"/> Previous</a>
        <a href="#contact"> Contact <ArrowRightAltIcon fontSize="large"/></a>

    </div>
    </div>
  );
}

export default Projects;
