// Footer:
// ___________________________________________________________________

import * as React from 'react'
import * as S from './styles.scss'
import Icon from '../Icons'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'
const handshakeHref = 'https://handshake.org'

const Footer = () => (
  <S.Footer>
    <div className="billboard">
      <div className="message">Slide into our DMs.</div>
      <div>
        <a
          href="/"
          target="_blank"
          rel="noopener"
          className="btn btn--secondary"
        >
          email form
        </a>
      </div>
      {/* <p>More info, features and news on the way.</p> */}
      {/* <p>auctions, twitter, handshake.org, newsletter</p> */}
    </div>
    <div className="explore">
      <div>
        <div className="call">
          <strong>Namelayer Auctions</strong>
        </div>
        <div className="action">
          <p>
            Handshake is an experimental peer-to-peer root naming system and
            decentralized and certificate authority.
          </p>
          <Icon name="carat" color="var(--color-text)" />
        </div>
      </div>
      <div>
        <div className="call">
          <strong>Learn about Handshake?</strong>
        </div>
        <div className="action">
          <p>
            Handshake is an experimental peer-to-peer root naming system and
            decentralized and certificate authority.
          </p>
          <Icon name="carat" color="var(--color-text)" />
        </div>
      </div>
    </div>
  </S.Footer>
)

export default Footer
