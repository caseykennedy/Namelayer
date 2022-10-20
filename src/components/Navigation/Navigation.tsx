// Header
// ___________________________________________________________________

import React from 'react'

// Hooks
import useTheme from '../../hooks/useTheme'

// Styles
import * as S from './styles.scss'

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
  const { toggleTheme } = useTheme()

  return (
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
  )
}

export default Header
