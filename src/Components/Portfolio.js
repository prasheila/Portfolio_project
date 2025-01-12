import React from 'react'
import Navibar from './Navibar'
import Home from './Home'
import About from './About'
import Project from './Project'
function Portfolio() {
    const scrollToNextSection = (sectionName) => {
        const section = document.querySelector(`.${sectionName}`)
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }
  return (
    <div>
        
            <Navibar/>
        
        <div className='Home'>
            <div className='container'>
                <Home scrollToNextSection={scrollToNextSection}/>
            </div>
        </div>
        <div className='About'>
            <div className='container'>
                <About/>
            </div>
        </div>
        <div className='Project'>
            <div className='container'>
                 <Project/>
            </div>
        </div>
        <div className='Skill'>
            <div className='container'>

            </div>
        </div>
        <div className='Contact'>
            <div className='container'>

            </div>
        </div>
    </div>
  )
}

export default Portfolio