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
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
}

const Intro = () => (
  <S.Intro
    variants={staggerItems}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8, margin: '200px' }}
  >
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
            stop shop for decentralized domain management.
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
          <strong>Supported by the dWeb</strong>
          <br />
          We are supported by the{' '}
          <a href="/" target="_blank" rel="noopener" className="link">
            @dwebfoundation
          </a>{' '}
          and work hand-in-hand with them to build the best decentralized
          internet.
        </p>
      </motion.div>
    </div>
  </S.Intro>
)

export default Intro
