// Features:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const idealPersonas = [
  'namers',
  'cypherpunks',
  'robots',
  'domainers',
  'users',
  'programs',
]

const featureData = [
  {
    title: 'Domain Manager',
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    title: 'TLD Marketplace',
    desc: 'Bid on new TLDs in the primary market. Participate in domain auctions.',
  },
  {
    title: 'Non-custodial Wallet',
    desc: 'Hodl, send and receive HNS and own your private keys.',
  },
  {
    title: 'Utility with Handshake',
    desc: 'Useful integrations with community projects.',
  },
  {
    title: 'Mint SLD NFTs',
    desc: 'Stake your TLD and sell sub-level domains in the secondary market. ',
  },
  {
    title: 'Secondary Marketplace',
    desc: 'Buy and sell domains amongst holders in the secondary market.',
  },
  {
    title: 'Light Client',
    desc: 'SPV light client support.',
  },
  {
    title: 'Fractals',
    desc: 'Decentralized link-trees and domain parking.',
  },
  {
    title: 'Hardware Support',
    desc: 'Ledger integration for hardware wallet support.',
  },
  {
    title: 'Atomic Swaps',
    desc: 'In-app Bitcoin atomic swaps.',
  },
]

const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
}

const Features = () => (
  <S.Features>
    <div className="detail">
      <div className="sticky">
        <p>
          <strong>Features</strong>
          <br />
          <span>secondary title</span>
        </p>
        <h2>It&apos;s not just a wallet.</h2>
        <p>
          With Namelayer you can manage your domains, send and receive HNS, and
          participate in domain auctions from your native device.
        </p>
        <div className="list-title">
          <strong>Namelayer is great for:</strong>
        </div>
        <ul>
          {idealPersonas.map((persona, idx) => (
            <li key={idx}>
              <Icon name="plus" /> {persona}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <motion.div
      className="feature-list"
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8, margin: '500px' }}
    >
      {featureData.map((feat, idx) => (
        <motion.div variants={polyVariant} className="feature" key={idx}>
          <div className="feature__title">{feat.title}</div>
          <div className="feature__desc">{feat.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Features>
)

export default Features