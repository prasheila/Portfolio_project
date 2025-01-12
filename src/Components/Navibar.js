import React from 'react'
import {Link} from 'react-scroll'
function Navibar() {
  return (
    <div>
        
        <nav>
            <h3>Portfolio</h3>
            <ul>
                <li>
                    <Link to="Home" smooth={true} duration={500} spy={true} hashSpy={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="About" smooth={true} duration={500} spy={true} hashSpy={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="Project" smooth={true} duration={500} spy={true} hashSpy={true}>
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="Skill" smooth={true} duration={500} spy={true} hashSpy={true}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to="Contact" smooth={true} duration={500} spy={true} hashSpy={true}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navibar