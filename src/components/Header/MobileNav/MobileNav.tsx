// MobileNav:
// ___________________________________________________________________

import React from 'react'
import { motion } from 'framer-motion'
import useTheme from '../../../hooks/useTheme'
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
      duration: 0.5,
      stiffness: 100,
      velocity: -100,
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      duration: 0.5,
      stiffness: 100,
      velocity: -100,
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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
  const { toggleTheme, theme } = useTheme()

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
        <motion.div variants={itemVariants} className="secondary">
          <div
            role="button"
            tabIndex={0}
            onClick={toggleTheme}
            onKeyDown={toggleTheme}
          >
            {theme === 'default' ? 'Light Mode' : 'Dark Mode'}
          </div>
          <div>Twitter</div>
        </motion.div>
      </S.MobileNav>
    </motion.div>
  )
}

export default MobileNav
