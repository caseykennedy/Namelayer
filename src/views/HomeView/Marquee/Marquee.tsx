// Capabilites:
// ___________________________________________________________________

import * as React from 'react'
import FastMarquee from 'react-fast-marquee'

// Styles
import * as S from './styles.scss'

// Components
import Section from '../../../components/Section'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  pauseOnHover: false,
  speed: 25,
}

const Marquee = () => (
  <S.Marquee>
    <FastMarquee {...MarqueeProps}>
      <ul>
        <li>Decentralized Domains</li>
        <li>Built on Handshake</li>
        <li>Non-custodial Wallet</li>
        <li>Domain Manager</li>
        <li>TLD Marketplace</li>
        <li>Handshake Powered</li>
        <li>Domain Auctions</li>
        {/* <li>Manage .yourname/ on the decentralized internet with Handshake.</li> */}
      </ul>
    </FastMarquee>
  </S.Marquee>
)

export default Marquee
