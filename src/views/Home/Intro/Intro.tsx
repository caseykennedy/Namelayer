// Intro:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const Intro = () => (
  <S.Intro
    variants={staggerItems}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
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
            Namelayer is built by namers, for namers. Designed to be your
            gateway into the decentralized web.
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
          We are supports of and supported by{' '}
          <a href="/" target="_blank" rel="noopener" className="link">
            @dwebfoundation
          </a>
        </p>
      </motion.div>
    </div>
  </S.Intro>
)

export default Intro
