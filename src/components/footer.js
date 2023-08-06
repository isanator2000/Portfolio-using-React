import React from 'react'
import GithubIcon from '@material-ui/icons/GitHub';
import '../styling/footer.css';

function Footer() {
  return (
    <div className='footer'>
        <p>Thank you for visiting my portfolio page! It's still a WIP so come visit again later!</p>
        <div className='githubIcon'> 
        <a href='https://github.com/isanator2000?tab=repositories' target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
          </a>
          </div>
    </div>
  )
}

export default Footer