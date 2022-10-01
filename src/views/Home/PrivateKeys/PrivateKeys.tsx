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
    <div className="message">
      <div className="sticky">
        <p>
          <strong>Decentralized</strong>
          <br />
          <span>secondary title</span>
        </p>
        <h2>
          Not your 🔑’s not your 🧀.
          <br />
          With Namelayer you hold your private keys.
        </h2>
        <p>
          The naming layer is the root of your data. Own yours on the dWeb with
          Namelayer/.
        </p>
        <div>
          <a
            href="https://handshake.org"
            target="__blank"
            rel="noreferrer"
            className="btn btn--secondary"
          >
            Download
            <Icon name="carat" className="icon" />
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
        <StaticImage
          src="../../../images/mockup.png"
          alt="A dinosaur"
          placeholder="blurred"
          objectFit="contain"
        />
      </motion.div>
    </div>
  </S.PrivateKeys>
)

export default PrivateKeys
