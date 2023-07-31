import React from 'react'
import '../styling/homepage.css'

function Home () {
    return ( 
    <div className='homepage'>
        <div className='intro'>
            <h1>I'm Isa.</h1>
            <div className='phrase'><p>I'm an industrial designer trying to learn how to code.</p></div>
        </div>

        <div className='skills'>
            <h1>Some of the skills I'm currently working on are...</h1>
                <ol className='skillList'> 
                    <li className='skill'>
                        <h3>Design and Product Development</h3>
                        <span>3D modeling, rendering, UX/UI</span>
                    </li>
                    <li className='skill'>
                        <h3>Coding (Front-end)</h3>
                        <span>HTML, CSS, JavaScript, React</span>
                    </li>
                </ol>
        </div>
    </div> 
    )
}

export default Home
