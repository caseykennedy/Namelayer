// PrivateKeys:
// ___________________________________________________________________

import * as React from 'react'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

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
          Handshake is an experimental peer-to-peer root naming system and
          decentralized and certificate authority.
        </p>
        <div>
          <a
            href="https://handshake.org"
            target="__blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Some action
            <Icon name="carat" className="icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="figure">
      <div className="box">app mockup</div>
    </div>
  </S.PrivateKeys>
)

export default PrivateKeys
