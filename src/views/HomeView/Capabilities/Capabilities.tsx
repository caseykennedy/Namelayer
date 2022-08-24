// Capabilites:
// ___________________________________________________________________

import * as React from 'react'
import Marquee from 'react-fast-marquee'

// Styles
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'
import MarqueeMessage from '../../../components/MarqueeMessage'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  pauseOnHover: true,
  speed: 25,
}

const Capabilities = () => (
  <S.Capabilities>
    <Marquee {...MarqueeProps}>
      <ul>
        <li>Domain Manager</li>
        <li>TLD Marketplace</li>
        <li>Non-custodial Wallet</li>
        <li>Handshake Powered</li>
      </ul>
    </Marquee>
  </S.Capabilities>
)

export default Capabilities
