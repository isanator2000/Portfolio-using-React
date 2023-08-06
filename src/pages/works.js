import React from 'react';
import '../styling/works.css';

function Works() {
  return (
    <div>
      <div className='projects'>
        <h1>Some of the things I've done so far are...</h1>
        <ol className='projectList'>
          <div className='projectColumn'>
            <li className='project'>
              <a href='https://alextrejo92.github.io/Project-Moodify/' target='_blank' rel='noopener noreferrer'>
                <h3>Moodify</h3>
              </a>
            </li>
            <li className='project'>
              <a href='https://protected-dusk-26900-3b74a0f4eef3.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <h3>BetBud</h3>
              </a>
            </li>
          </div>
          <div className='projectColumn'>
            <li className='project'>
              <a href='https://isanator2000.github.io/code-quiz/' target='_blank' rel='noopener noreferrer'>
                <h3>JavaScript Quiz</h3>
              </a>
            </li>
            <li className='project'>
              <a href='https://isanator2000.github.io/JS-password-generator/' target='_blank' rel='noopener noreferrer'>
                <h3>JavaScript Password Generator</h3>
              </a>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
}

export default Works;
