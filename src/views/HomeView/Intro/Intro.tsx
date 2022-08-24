// Intro:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
}

const Intro = () => (
  <S.Intro variants={svgVariant} initial="hidden" animate="visible">
    <div className="row">
      <p>
        <strong>Intro</strong>
        <br />
        <span>We are your frens.</span>
      </p>
    </div>

    <div className="row">
      <motion.div variants={polyVariant} className="item">
        <div className="figure">
          <Icon name="carat" color="var(--color-text)" />
        </div>
        <p>
          <strong>Built by namers</strong>
          <br />
          <span>
            Namelayer is built by namers, for namers. Designed to be your one
            stop shop for decentralized domains.
          </span>
        </p>
      </motion.div>

      <motion.div variants={polyVariant} className="item">
        <div className="figure">
          <Icon name="carat" color="var(--color-text)" />
        </div>
        <p>
          <strong>Advised by degens</strong>
          <br />
          Implement a converged Ticket and Issue Management system to enable
          seamless work collaboration across teams.
        </p>
      </motion.div>

      <motion.div variants={polyVariant} className="item">
        <div className="figure">
          <Icon name="carat" color="var(--color-text)" />
        </div>
        <p>
          <strong>Supported by</strong>
          <br />
          We are supported by the{' '}
          <a href="/" target="_blank" rel="noopener" className="link">
            @dwebfoundation
          </a>{' '}
          and work hand-in-hand with them to build the best decentralized web.
        </p>
      </motion.div>
    </div>
  </S.Intro>
)

export default Intro
