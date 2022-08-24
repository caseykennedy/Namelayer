/* eslint-disable react/no-unescaped-entities */
// HomeView:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import Rings from '../../components/SVG/Rings'
import Wordmark from '../../components/SVG/Wordmark'

import Capabilities from './Capabilities'
import Intro from './Intro'
import PrivateKeys from './PrivateKeys'

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

const Hero = () => (
  <S.Hero>
    <div className="billboard">
      <div className="intro">
        {/* <p>Coming Soon</p> */}
        <h1>
          Namelayer is an on-chain domain manager and non-custodial HNS wallet
          for the Handshake blockchain.
        </h1>
      </div>
      <div className="wordmark">
        <Wordmark />
      </div>
    </div>
    <div className="figure">
      <div className="rings">
        <Rings />
      </div>
      <div className="handshake">
        <Icon name="handshake" color="var(--color-text)" />
      </div>
    </div>
  </S.Hero>
)

// const Meta = () => (
//   <Section>
//     <S.Meta variants={svgVariant} initial="hidden" animate="visible">
//       <motion.div variants={polyVariant} className="item item--built">
//         <span>Domain Manager</span>
//         <p>Manage .yourname/ on the decentralized internet with Handshake.</p>
//       </motion.div>
//       <motion.div variants={polyVariant} className="item item--advised">
//         <span>HNS Wallet</span>
//         <p>A non-custodial wallet to Hodl, send and receive HNS and own your private keys.</p>
//       </motion.div>
//       <motion.div variants={polyVariant} className="item item--supported">
//         <span>supported by</span>
//         <p>@dwebfoundation</p>
//       </motion.div>
//     </S.Meta>
//   </Section>
// )

const Features = () => (
  <Section border={true} pt="0" pr="0" pb="0" pl="0">
    <S.Features>
      <div className="feature-detail">
        <div className="feature-detail__sticky">
          <p>
            <strong>Features</strong>
            <br />
            <span>secondary title</span>
          </p>
          <h2>It's not just a wallet.</h2>
          <p>
            With Namelayer you can manage your domains, send and receive HNS,
            and participate in domain auctions from your native device.
          </p>
          <div className="list-title"><strong>Namelayer is great for:</strong></div>
          <ul>
            {idealPersonas.map((persona, idx) => (
              <li key={idx}>
                <Icon name="plus" /> {persona}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="feature-list">
        {featureData.map((feat, idx) => (
          <div className="feature" key={idx}>
            <div className="feature__title">{feat.title}</div>
            <div className="feature__desc">{feat.desc}</div>
          </div>
        ))}
      </div>
    </S.Features>
  </Section>
)

const Roadmap = () => (
  <Section border={true}>
    <p>
      <strong>Roadmap</strong>
      <br />
      <span>secondary title</span>
    </p>
    <h2>There's plenty in the pipeline.</h2>
  </Section>
)

const Team = () => (
  <Section border={true}>
    <S.Team>
      <p>
        <strong>Team</strong>
      </p>
      <h2>Dedicated to decentralization.</h2>

      <div className="grid">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </S.Team>
  </Section>
)

const Outro = () => (
  <Section border={true}>
    <p>
      <strong>Outro</strong>
      <br />
      <span>secondary title</span>
    </p>
    <h2>Slide into our DMs.</h2>
    <p>More info, features and news on the way.</p>
    <p>auctions, twitter, handshake.org, newsletter</p>
  </Section>
)

const HomeView = () => (
  <S.HomeView>
    {/* <div className="box__header" /> */}
    <Hero />
    <Capabilities />
    <Intro />
    <PrivateKeys />
    <Features />
    <Roadmap />
    <Team />
    <Outro />
  </S.HomeView>
)

export default HomeView
