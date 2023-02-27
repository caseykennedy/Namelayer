// Home:

import * as React from 'react'

import * as S from './styles.scss'

import Icon from '../../components/Icons'
import Section from '../../components/Section'
import Rings from '../../components/SVG/Rings'
import Torus from '../../components/SVG/Torus'
import Wordmark from '../../components/SVG/Wordmark'

import Marquee from './Marquee'
import Intro from './Intro'
import PrivateKeys from './PrivateKeys'
import Features from './Features'
import Namers from './Namers'
import Roadmap from './Roadmap'
import Team from './Team'
import Browsers from './Browsers'

const Hero = () => (
  <S.Hero>
    <div className="billboard">
      <div className="intro">
        {/* <p>Coming Soon</p> */}
        <h1>
          Namelayer is an on-chain domain manager and non-custodial Handshake wallet.
        </h1>
      </div>
      <div className="wordmark">
        <Wordmark />
      </div>
    </div>
    <div className="figure">
      <div className="torus">
        <Torus />
      </div>
      <div className="handshake">
        <Icon name="handshake" color="var(--color-text)" />
      </div>
      {/* <div className="rings">
        <Rings />
      </div> */}
    </div>
  </S.Hero>
)

const Home = () => (
  <S.HomeView>
    <Hero />
    <Marquee />
    <Intro />
    <PrivateKeys />
    <Features />
    <Namers />
    <Roadmap />
    {/* <Browsers /> */}
    <Team />
  </S.HomeView>
)

export default Home
