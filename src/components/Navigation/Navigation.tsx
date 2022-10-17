// Header
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
// import MobileNav from './MobileNav'
// import Modal from '../Modal'
import Symbol from '../SVG/Symbol'
import HandshakeLogo from '../SVG/Handshake'

// ___________________________________________________________________

const navLinks = [
  {
    name: 'intro',
    path: 'intro',
  },
  {
    name: 'features',
    path: 'features',
  },
  {
    name: 'roadmap',
    path: 'roadmap',
  },
]

const Header = () => {
  const [theme, setTheme] = useState('default')
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'darkMode' : 'default')
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', localTheme)
    }
  }, [])

  return (
    <>
      <S.Navigation>
        <nav>
          {navLinks.map((link, idx) => (
            <a href={`/#${link.path}`} key={idx}>
              {link.path}
            </a>
          ))}
        </nav>

        <div className="utilities">
          <div className="pill">Coming Soon</div>
          <button type="button" onClick={toggleTheme} className="theme-toggle">
            ◒
          </button>
        </div>
      </S.Navigation>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
