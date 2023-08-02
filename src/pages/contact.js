import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import '../styling/contact.css'
import ContactForm from '../components/contactForm';

function Contact() {
  return (
    <div className='contact'>
          <div className='contactForm'>
           <h1>Contact me</h1>
           <ContactForm />
          </div>
      <div>
        <LinkedIn/> 
        <GitHub/>
      </div>
      <p>iruizord@gmail.com</p>

    </div>
  )
}

export default Contact