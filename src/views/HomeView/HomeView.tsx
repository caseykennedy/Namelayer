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

// ___________________________________________________________________

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
}

const idealPersonas = [
  'namers',
  'cypherpunks',
  'robots',
  'domainers',
  'users',
  'programs',
]

const Hero = () => (
  <S.Hero>
    <div className="billboard">
      <div>
        <Wordmark />
      </div>
      <div>
        <h2>
          Namelayer is your on-chain domain manager and non-custodial HNS wallet
          for the Handshake blockchain.
        </h2>
        <p>Manage .yourname/ on the decentralized web with Handshake.</p>
      </div>
    </div>
    <div className="figure">
      <div className="rings">
        <Rings />
      </div>
      <div className="handshake">
        <Icon name="handshake" />
      </div>
    </div>
  </S.Hero>
)

const Meta = () => (
  <Section>
    <S.Meta variants={svgVariant} initial="hidden" animate="visible">
      <motion.div variants={polyVariant} className="item item--built">
        <span className="pill pill--built">Built by namers</span>
        <p>taylor, chris, casey</p>
      </motion.div>
      <motion.div variants={polyVariant} className="item item--advised">
        <span className="pill pill--advised">Advised by degens</span>
        <p>jackie, chjango, kyokan</p>
      </motion.div>
      <motion.div variants={polyVariant} className="item item--supported">
        <span className="pill pill--supported">Supported by</span>
        <p>@dwebfoundation</p>
      </motion.div>
    </S.Meta>
  </Section>
)

const Intro = () => (
  <Section border={true} pt="0" pr="0" pb="0" pl="0">
    <S.Intro>
      <div>
        <h5 className="">intro</h5>
        <div className="private-keys">
          <h2>
            Not your 🔑’s not your 🧀 — With Namelayer you hold your private
            keys.
          </h2>
        </div>
      </div>
      <div>
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
    </S.Intro>
  </Section>
)

const Features = () => (
  <Section border={true} pt="0" pr="0" pb="0" pl="0">
    <S.Features>
      <div>
        <h5>features</h5>
        <h2>It's not just a wallet.</h2>
        <p className="lead">
          With Namelayer you can manage your domains, send and receive HNS, and
          participate in domain auctions from your native device.
        </p>
        <div className="title">Namelayer is great for:</div>
        <ul>
          {idealPersonas.map((persona, idx) => (
            <li key={idx}>
              <Icon name="plus" /> {persona}
            </li>
          ))}
        </ul>
      </div>
      <div className="feature-list">
        <p>Feature list</p>
      </div>
    </S.Features>
  </Section>
)

const Roadmap = () => (
  <Section border={true}>
    <h5 className="">roadmap</h5>
    <h2>There's plenty in the pipeline.</h2>
  </Section>
)

const Team = () => (
  <Section border={true}>
    <h5 className="">team</h5>
    <h2>Dedicated to decentralization.</h2>
  </Section>
)

const Outro = () => (
  <Section border={true}>
    <h5 className="">outro</h5>
    <h2>Slide into our DMs.</h2>
    <p>More info, features and news on the way.</p>
    <p>auctions, twitter, handshake.org, newsletter</p>
  </Section>
)

const HomeView = () => (
  <S.HomeView>
    <Hero />
    <Meta />
    <Intro />
    <Features />
    <Roadmap />
    <Team />
    <Outro />
  </S.HomeView>
)

export default HomeView
