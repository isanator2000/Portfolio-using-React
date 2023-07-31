import React from 'react'
import '../styling/works.css';


function Works () {
    return ( 
    <div>
        <div className='projects'>
            <h1>Some of the things I've done so far are...</h1>
                <ol className='projectList'> 
                    <div className='projectColumn'>
                    <li className='project'>
                        <h3>Moodify</h3>
                    </li>
                    <li className='project'>
                        <h3>BetBud</h3>
                    </li>
                    </div>
                    <div className='projectColumn'>
                    <li className='project'>
                        <h3>JavaScript Quiz</h3>
                    </li>
                    <li className='project'>
                        <h3>JavaScript Password Generator</h3>
                    </li>
                    </div>
                </ol>
        </div>
    </div> 
    )
}

export default Works
