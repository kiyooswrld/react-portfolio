import React from 'react'
import "./contact.css"
import emailjs from 'emailjs-com';



// Material ui Components
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Contact() {
  
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mfnir2m', 'template_arp8u3f', e.target, 'user_d2FjwkRMG2LuCRjawmLDm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <>
      <div className="contact" id="contact">

        <FormControl style={{marginTop: 500}} class="container" onSubmit={sendEmail}>
          <p>CONTACT ME</p>
    
          <div class="login">
          <TextField style={{margin: 20}} required id="standard-required" label="Full Name" type="text" name="user_name" defaultValue="" />
          <TextField style={{margin: 20}} required id="standard-required" label="Email"    type="email" name="user_email" defaultValue="" />
            
          </div>
            
          <div class="subject">
          <TextField style={{margin: 20}} required id="standard-required" label="Subject" name="message" defaultValue="" />
          </div>
          
          <div class="msg">
          <TextField
          id="outlined-multiline-static"
          label="Your message"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          style={{margin: 20}}
        />
            <Button id="submitBtn" href="https://giphy.com/gifs/quaninc-stickers-emoji-emoticons-YOHJemB8DhfWuEHQwC/fullscreen" type="submit" value="Send">SUBMIT</Button>


          </div>
          
          </FormControl>

        <a href="#home"><ArrowRightAltIcon style={{transform: "rotate(180deg"}} fontSize="large"/> HOME PAGE </a>

      </div>
    </>
  );
}

export default Contact;
