import React from 'react'
import projectpic from '../pictures/w16.jpg'
function Project() {
  return (
    <div>
      <p className='project-title'>My Projects</p>
      <div className='project-cards'>
        <div className='project-card'>
          <img className='project-image' src={projectpic} alt='project image'/>
          <h3 className='project-name'>Project-1</h3>
          <p className='project-description'>A basic description of the project goes here</p>
          <button className='view-project-button'>View Full Project</button>
        </div>
        <div className='project-card'>
          <img className='project-image' src={projectpic} alt='project image'/>
          <h3 className='project-name'>Project-2</h3>
          <p className='project-description'>A basic description of the project goes here</p>
          <button className='view-project-button'>View Full Project</button>
        </div>
        <div className='project-card'>
          <img className='project-image' src={projectpic} alt='project image'/>
          <h3 className='project-name'>Project-3</h3>
          <p className='project-description'>A basic description of the project goes here</p>
          <button className='view-project-button'>View Full Project</button>
        </div>
      </div>
    </div>
  )
}

export default Project