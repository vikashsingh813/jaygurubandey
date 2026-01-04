import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)

  const closeMenu = () => {
    setMobileMenu(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

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

  const handleRefresh = () => window.location.reload()

  useEffect(() => {
    if (!openDropdown) return

    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [openDropdown])

  return (
    <nav className="container" ref={navRef}>
      {mobileMenu && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Nav Links */}
      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>

        {/* ✅ HOME DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname === '/' || location.pathname.startsWith('/home'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('home')
            }}
          >
            होम ▾
          </button>

          {openDropdown === 'home' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/')}>मुख्य होम</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-updates')}>ताज़ा अपडेट्स</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/dailyschedule')}>दैनिक कार्यक्रम</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/live-now')}>लाइव दर्शन</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ ABOUT DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/about'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('about')
            }}
          >
            परिचय ▾
          </button>

          {openDropdown === 'about' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/about')}>गुरुजी के बारे में</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/ashram-vision')}>आश्रम दृष्टि</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/committee-members')}>समिति सदस्य</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ AMRITVANI DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/satsang'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('amritvani')
            }}
          >
            अमृतवाणी ▾
          </button>

          {openDropdown === 'amritvani' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/satsang')}>सभी अमृतवाणी</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-amritvani')}>नवीनतम अमृतवाणी</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/daily-teachings')}>दैनिक उपदेश</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ BHAJAN DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/bhajan'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('bhajan')
            }}
          >
            भजन ▾
          </button>

          {openDropdown === 'bhajan' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/bhajan')}>सभी भजन</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-bhajan')}>नवीनतम भजन</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/satguru-chalisa')}>सतगुरु चालीसा</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/satguru-arti')}>सतगुरु आरती</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ PROGRAM DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/program'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('program')
            }}
          >
            कार्यक्रम ▾
          </button>

          {openDropdown === 'program' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/program')}>सभी कार्यक्रम</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/upcoming-programs')}>आगामी कार्यक्रम</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/special-events')}>विशेष आयोजन</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/important-dates')}>महत्वपूर्ण तिथियाँ</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ BLOG DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/blog'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('blog')
            }}
          >
            ब्लॉग ▾
          </button>

          {openDropdown === 'blog' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/blog')}>सभी ब्लॉग</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/testimonies')}>अनुभव साझा</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/spotlight')}>विशेष झलक</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ GALLERY DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/gallery'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('gallery')
            }}
          >
            गैलरी ▾
          </button>

          {openDropdown === 'gallery' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/gallery')}>सभी गैलरी</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/ashram-life')}>आश्रम जीवन</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/divine')}>दिव्य क्षण</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ CONTACT DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/contact'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('contact')
            }}
          >
            संपर्क ▾
          </button>

          {openDropdown === 'contact' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/contact')}>संपर्क विवरण</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/chat')}>हमसे चैट करें</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/faq')}>प्रश्न / प्रतिक्रिया</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/subscribe')}>सूचनाएँ प्राप्त करें</button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ CONTRIBUTE DROPDOWN */}
        <li className="dropdown">
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/contribute'),
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('contribute')
            }}
          >
            योगदान ▾
          </button>

          {openDropdown === 'contribute' && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/contribute')}>दान करें</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contribute-faq')}>योगदान FAQ</button>
              </li>
            </ul>
          )}
        </li>

      </ul>

      {/* Circle */}
      <img
        src={circle}
        alt="Circle"
        className="circle-img"
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Mobile Menu Icon */}
      <div
        className={`menu ${mobileMenu ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
