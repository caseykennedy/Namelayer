// Header
// ___________________________________________________________________

import React, { useState } from 'react'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import Symbol from '../SVG/Symbol'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <div className="symbol">
          <Symbol />
        </div>

        <div className="wordmark">Namelayer</div>

        <div className="utilities">
          <div className="twitter">
            <Icon name="twitter" />
          </div>
          <button type="button" onClick={toggleMenu} className="menu-toggle">
            {isNavOpen ? "Exit" : "Menu"}
          </button>
        </div>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
