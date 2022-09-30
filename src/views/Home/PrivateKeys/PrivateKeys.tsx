// PrivateKeys:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant } from '../../../utils/variants'

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
        viewport={{ once: true, amount: 0.8, margin: '200px' }}
        className="box"
      >
        app mockup
      </motion.div>
    </div>
  </S.PrivateKeys>
)

export default PrivateKeys
