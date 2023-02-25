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
  'namers',
  'cypherpunks',
  'developers',
  'domainers',
  'holders',
  'resellers',
]

const Namers = () => (
  <S.Namers>
    <div className="detail">
      <div className="sub-heading">
        Decentralized
      </div>
      <h2>Namelayer is great for everyone.</h2>
      <p>
        <strong>With Namelayer you hold your private keys.</strong>
        <br />
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
        {idealPersonas.map((persona, idx) => (
          <motion.li
            variants={polyVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            key={idx}
          >
            <Icon name="plus" /> {persona}
          </motion.li>
        ))}
      </ul>
    </div>
  </S.Namers>
)

export default Namers
