// Features:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const featureData = [
  {
    title: 'Decentralized Wallet',
    desc: 'Hodl, send and receive HNS with your own private keys.',
    icon: <Icon name="carat" color="var(--color-primary)" />,
  },
  {
    title: 'Multi-account Wallet',
    desc: "Create as many wallets and wallet accounts as you'd like.",
    icon: <Icon name="carat" color="var(--color-secondary)" />,
  },
  {
    title: 'Domain Manager',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    icon: <Icon name="carat" color="var(--color-tertiary)" />,
  },
  {
    title: 'TLD Marketplace',
    desc: 'Bid on new TLDs in the primary market. Participate in domain auctions.',
    icon: <Icon name="carat" color="var(--color-quaternary)" />,
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

const featureTitle = {
  show: {
    y: -58,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  hide: {
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
}

const featureDesc = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
}

const FeatureGrid = () => (
  <motion.div
    className="feature-grid"
    variants={staggerItems}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
  >
    {featureData.map((feat, idx) => (
      <motion.div
        initial="hide"
        whileHover="show"
        animate="hide"
        variants={polyVariant}
        className="feature"
        key={idx}
      >
        <motion.div variants={featureTitle} className="feature__title">
          <span>{feat.icon}</span>
          {feat.title}
        </motion.div>
        <motion.div variants={featureDesc} className="feature__desc">
          {feat.desc}
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
)

const Features = () => (
  <S.Features id="features">
    <div className="detail">
      <div>
        <div className="text-sub-heading">Features</div>
        <h2>It&apos;s not just a wallet</h2>
        <p>
          With Namelayer you can manage your domains, send and receive HNS, and
          participate in domain auctions from your native device.
        </p>
      </div>
      <div />
    </div>
    <FeatureGrid />
  </S.Features>
)

export default Features
