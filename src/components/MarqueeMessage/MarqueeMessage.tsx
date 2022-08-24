// MarqueeMessage:
// ___________________________________________________________________

import * as React from 'react'
import Marquee from 'react-fast-marquee'

// ___________________________________________________________________

type Props = {
  message?: string
}

const MarqueeProps = {
  gradient: false,
  speed: 75,
}

const MarqueeMessage = ({ message }: Props) => (
  <Marquee {...MarqueeProps}>
    <p>{message}</p>
  </Marquee>
)

export default MarqueeMessage

// ___________________________________________________________________

const defaultProps = {
  message:
    'Domain Manager | TLD Marketplace | Non-custodial Wallet | Handshake Powered',
}

MarqueeMessage.defaultProps = defaultProps
