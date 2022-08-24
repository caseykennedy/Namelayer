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
          <strong>Intro</strong>
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
            Handshake.org
          </a>
        </div>
      </div>
    </div>
    <div className="figure">
      <div className="box">app mockup</div>
      {/* <div className="browser-compat">
          <h3>Access Handshake TLDs with these browsers:</h3>
          <ul>
            <li>- Beacon</li>
            <li>- Brave</li>
            <li>- Opera</li>
            <li>- Puma</li>
            <li>- Aloha</li>
          </ul>
        </div>
        <div className="handshake-info">
          <h3>An experimental peer-to-peer root naming system.</h3>
          <p>Handshake is a decentralized naming and certificate authority.</p>
          <a href="https://handshake.org" target="__blank" rel="noreferrer">
            Handshake.org
          </a>
        </div> */}
    </div>
  </S.PrivateKeys>
)

export default PrivateKeys
