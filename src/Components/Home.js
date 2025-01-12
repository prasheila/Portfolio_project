import React from 'react'
import Profile from '../pictures/Profilepic-crop.jpg'
function Home({scrollToNextSection}) {
  return (
    <div>
        <div className='home1'>
        <img className='profileimg' src={Profile} alt='Profile image'/>
        <h1 className='Profilename'>Hi, I am Suresh Selvaraj</h1>
        <p className='Profileprof'>A Professional E-learning Developer</p>
        <button onClick={() => scrollToNextSection("Project")}>VIEW MY WORK</button>
        </div>
       
            
        

    </div>
  )
}

export default Home