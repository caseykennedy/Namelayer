// Footer:
// ___________________________________________________________________

import * as React from 'react'
import * as S from './styles.scss'
import Icon from '../Icons'
import SubscribeForm from '../SubscribeForm'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'
const handshakeHref = 'https://handshake.org'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <div className="billboard">
      <div className="capture">
        <div className="capture__message">Slide into our DMs.</div>
        <SubscribeForm />
        {/* <p>More info, features and news on the way.</p> */}
        {/* <p>auctions, twitter, handshake.org, newsletter</p> */}
      </div>
      <div className="explore">
        <div>
          <div className="explore__call">
            <span>😎</span>
            <strong>Namelayer Auctions</strong>
          </div>
          <div className="explore__action">
            <div>
              Handshake is an experimental peer-to-peer root naming system and
              decentralized and certificate authority.
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener"
              className="btn btn--outline btn--full-width"
            >
              Name Auctions
              <Icon name="carat" />
            </a>
          </div>
        </div>
        <div>
          <div className="explore__call">
            <span>😎</span>
            <strong>Dive into Handshake</strong>
          </div>
          <div className="explore__action">
            <div>
              Handshake is an experimental peer-to-peer root naming system and
              decentralized and certificate authority.
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener"
              className="btn btn--outline btn--full-width"
            >
              Handshake.org
              <Icon name="carat" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="legal">
      <span>&copy;{currentYear} Namelayer</span>
      <span>Decentralize Everything</span>
    </div>
  </S.Footer>
)

export default Footer
