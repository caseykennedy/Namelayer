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
import Features from './Features'
import Roadmap from './Roadmap'
import Team from './Team'

// ___________________________________________________________________

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
  </S.HomeView>
)

export default HomeView
