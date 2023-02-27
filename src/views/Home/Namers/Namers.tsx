// Namers:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const idealPersonas = [
  {
    persona: 'namers',
    icon: <Icon name="carat" color="var(--color-primary)" />,
  },
  {
    persona: 'cypherpunks',
    icon: <Icon name="carat" color="var(--color-secondary)" />,
  },
  {
    persona: 'developers',
    icon: <Icon name="carat" color="var(--color-tertiary)" />,
  },
  {
    persona: 'domainers',
    icon: <Icon name="carat" color="var(--color-quaternary)" />,
  },
  {
    persona: 'holders',
    icon: <Icon name="carat" color="var(--color-primary)" />,
  },
  {
    persona: 'resellers',
    icon: <Icon name="carat" color="var(--color-secondary)" />,
  },
]

const Namers = () => (
  <S.Namers>
    <div className="detail">
      <div className="text-sub-heading">Self Ownership</div>
      <h2>We want everyone to own their name</h2>
      <p>
        The only way to own your assets is to hold your private keys. Do so with
        ease using Namelayer/.
      </p>
      <div>
        <a
          href="https://handshake.org"
          target="__blank"
          rel="noreferrer"
          className="btn btn--outline"
        >
          Coming Soon
          {/* <Icon name="carat" className="icon" /> */}
        </a>
      </div>
    </div>
    <div className="list">
      <ul>
        {idealPersonas.map((item, idx) => (
          <motion.li
            variants={polyVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            key={idx}
          >
            <span>{item.icon}</span>
            {item.persona}
          </motion.li>
        ))}
      </ul>
    </div>
  </S.Namers>
)

export default Namers
