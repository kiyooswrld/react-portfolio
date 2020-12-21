import React from 'react'
import "./icons.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Icons() {
  return (
      <div class="icons">
        <InstagramIcon fontSize="large" onClick={event =>  window.open('https://www.instagram.com/kiyooswrld/', '_blank')}/>

        <TwitterIcon fontSize="large" onClick={event =>  window.open('https://twitter.com/KiyooWrlds', '_blank')}/>
        
        <LinkedInIcon fontSize="large" onClick={event =>  window.open('https://www.linkedin.com/in/sensei-zaid-6b80b01b5/', '_blank')}/>
        
        <GitHubIcon  fontSize="large" onClick={event =>  window.open('https://github.com/kiyooswrld')} />
        
        <PinterestIcon fontSize="large" onClick={event =>  window.open('https://www.pinterest.de/kiyoosw', '_blank')}/>
      </div>
  );
}

export default Icons;
