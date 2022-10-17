// MobileNav:
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// import theme from '../../../styles/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const routes = [
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

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.035, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

type LinkProps = {
  link: {
    path: string
    name: string
  }
  handleExitOnClick: () => void
}

const NavLink = ({ link, handleExitOnClick }: LinkProps) => (
  <S.NavLink
    variants={itemVariants}
    whileTap={{ scale: 0.98 }}
    onClick={handleExitOnClick}
  >
    <a href={`/#${link.path}`}>{link.name}</a>
  </S.NavLink>
)

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const MobileNav = ({ handleExitOnClick, isOpen }: NavProps) => {
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
    <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
      <S.MobileNav variants={listVariants}>
        {routes.map((item, idx) => (
          <NavLink
            key={idx}
            handleExitOnClick={handleExitOnClick}
            link={item}
          />
        ))}
      </S.MobileNav>
    </motion.div>
  )
}

export default MobileNav
