// Features:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// ___________________________________________________________________

const featureData = [
  {
    title: 'Decentralized Wallet',
    desc: 'Hodl, send and receive HNS and own your private keys.',
  },
  {
    title: 'Multi-account Wallet',
    desc: 'Create as many wallets and wallet accounts as you’d like.',
  },
  {
    title: 'Domain Manager',
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    title: 'TLD Marketplace',
    desc: 'Bid on new TLDs in the primary market. Participate in domain auctions.',
  },
  // {
  //   title: 'Utility with Handshake',
  //   desc: 'Useful integrations with community projects.',
  // },
  // {
  //   title: 'Mint SLD NFTs',
  //   desc: 'Stake your TLD and sell sub-level domains in the secondary market. ',
  // },
  // {
  //   title: 'Secondary Marketplace',
  //   desc: 'Buy and sell domains amongst holders in the secondary market.',
  // },
  // {
  //   title: 'Light Client',
  //   desc: 'SPV light client support.',
  // },
  // {
  //   title: 'Fractals',
  //   desc: 'Decentralized link-trees and domain parking.',
  // },
  // {
  //   title: 'Atomic Swaps',
  //   desc: 'In-app Bitcoin atomic swaps.',
  // },
]

const FeatureGrid = () => (
  <motion.div
    className="feature-grid"
    variants={staggerItems}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    {featureData.map((feat, idx) => (
      <motion.div variants={polyVariant} className="feature" key={idx}>
        <div className="feature__title">{feat.title}</div>
        <div className="feature__desc">{feat.desc}</div>
      </motion.div>
    ))}
  </motion.div>
)

const Features = () => (
  <S.Features id="features">
    <div className="detail">
      <div className="sticky">
        <div className="sub-heading">Features</div>
        <h2>It&apos;s not just a wallet</h2>
        <p>
          With Namelayer you can manage your domains, send and receive HNS, and
          participate in domain auctions from your native device.
        </p>
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
            src="../../../images/mock-dashboard.png"
            alt="A dinosaur"
            placeholder="blurred"
            objectFit="contain"
          /> */}
        </motion.div>
      </div>
    </div>
    <FeatureGrid />
  </S.Features>
)

export default Features
