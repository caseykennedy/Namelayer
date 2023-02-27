// PrivateKeys:
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

const PrivateKeys = () => (
  <S.PrivateKeys>
    <div className="detail">
      <div className="sticky">
        <div className="text-sub-heading">Decentralized ownership</div>
        <h2>Protect your private keys with ease</h2>
        {/* <h2>Not your key&apos;s, not your cheese</h2> */}
        <p>
          <strong>With Namelayer you hold your private keys.</strong>
          <br />
          The only way to own your assets is to hold your private keys. Do so
          with ease using Namelayer.
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
    </div>
    <div className="figure">
      <motion.div
        variants={polyVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="box"
      >
        {/* <StaticImage
          src="../../../images/mock-portfolio.png"
          alt="A dinosaur"
          placeholder="blurred"
          objectFit="contain"
        /> */}
      </motion.div>
    </div>
  </S.PrivateKeys>
)

export default PrivateKeys
