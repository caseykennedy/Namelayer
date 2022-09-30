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
      <S.Header>
        <div className="logo">
          <div className="symbol">
            <Symbol />
          </div>
        </div>

        <div className="marquee">Namelayer</div>

        <div className="twitter">
          <Icon name="twitter" />
          <button
            type="button"
            onClick={toggleTheme}
            onKeyDown={toggleTheme}
            className="yinyang"
          >
            ◒
          </button>
        </div>
      </S.Header>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
