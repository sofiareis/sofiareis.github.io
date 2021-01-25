import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () =>setClick(false);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Sofia Bandeira dos Reis <i class="fas fa-laptop-code"></i>
                    </Link>  
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                        
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/' class='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/projects' class='nav-links' onClick={closeMenu}>
                                Projects
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to ='/resume' class='nav-links' onClick={closeMenu}>
                                Resume
                            </Link>
                        </li> 
                    </ul>
                </div>
            
            </nav>
        </>
    )
}

export default Navbar
