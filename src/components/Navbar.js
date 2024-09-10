import React from 'react'
import Logo from '../images/logo.png'
import Ham from '../images/menu.png'

// "https://img.icons8.com/sf-black/64/menu.png"


const Navbar = () => {
  return (
    <div>
        <nav className="navbar" style={{backgroundColor: '#F5F5F5'}}>
            <div className="container-fluid d-flex justify-content-between p-2 align-items-center">
                <a href="/" className="ps-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><img width="30" height="30" src={Ham} alt="menu"/></a>
                <span className="h3 text-success">Green Spoon</span>
                <img src={Logo} alt="Logo" width="50" height="44" className="d-inline-block align-text-top"/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar