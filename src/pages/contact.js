import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styling/contact.css';
import ContactForm from '../components/contactForm';

function Contact() {
  return (
    <div className='contact'>
      <div className='contactForm'>
        <h1>Contact me</h1>
        <ContactForm />
      </div>
      <div>
        <a href='https://www.linkedin.com/in/isabella-ruiz-ord/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/isanator2000?tab=repositories' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
      </div>
      <p>iruizord@gmail.com</p>
    </div>
  );
}

export default Contact;
