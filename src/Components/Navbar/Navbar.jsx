import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import menu from '../../assets/menu.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)
  const closeMenu = () => setMobileMenu(false)

  const linkClass = ({ isActive }) => 'btn' + (isActive ? ' active' : '')

  const handleNavClick = (path) => {
    closeMenu()

    if (location.pathname === path) {
      window.location.reload()
    } else {
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // 🔄 Refresh page when clicking on logo or circle
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <nav className='container'>
      {/* Left side logo */}
      <img
        src={logo}
        alt='Logo'
        className='logo'
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li><button onClick={() => handleNavClick('/')} className={linkClass({ isActive: location.pathname === '/' })}>घर</button></li>
        <li><button onClick={() => handleNavClick('/about')} className={linkClass({ isActive: location.pathname === '/about' })}>बारे में</button></li>
        <li><button onClick={() => handleNavClick('/satsang')} className={linkClass({ isActive: location.pathname === '/satsang' })}>अमृतवाणी</button></li>
        <li><button onClick={() => handleNavClick('/bhajan')} className={linkClass({ isActive: location.pathname === '/bhajan' })}>भजन</button></li>
        <li><button onClick={() => handleNavClick('/program')} className={linkClass({ isActive: location.pathname === '/program' })}>कार्यक्रम</button></li>
        <li><button onClick={() => handleNavClick('/blog')} className={linkClass({ isActive: location.pathname === '/blog' })}>ब्लॉग</button></li>
        <li><button onClick={() => handleNavClick('/gallery')} className={linkClass({ isActive: location.pathname === '/gallery' })}>गैलरी</button></li>
        <li><button onClick={() => handleNavClick('/contact')} className={linkClass({ isActive: location.pathname === '/contact' })}>हमसे संपर्क करें</button></li>

        {/* ✅ New Contribute Button */}
        <li><button onClick={() => handleNavClick('/contribute')} className={linkClass({ isActive: location.pathname === '/contribute' })}>योगदान करें</button></li>
      </ul>

      {/* Right side circle (refresh on click) */}
      <img
        src={circle}
        alt="Circle"
        className="circle-img"
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Mobile menu icon */}
      <div className={`menu ${mobileMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
