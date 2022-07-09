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

const Hero = () => (
  <S.Hero>
    <div className="billboard">
      <div>
        <Wordmark />
      </div>
      <div>
        <h2>Manage .yourname/ on the dWeb with Handshake.</h2>
        <p>
          Namelayer is your on-chain domain manager and non-custodial HNS wallet
          for the Handshake blockchain.
        </p>
      </div>
    </div>
    <div className="figure">
      <div>
        <Rings />
      </div>
    </div>
  </S.Hero>
)

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

const Features = () => <Section border={true}>Features</Section>

const HomeView = () => (
  <S.HomeView>
    <Hero />
    <Meta />
    <Features />
  </S.HomeView>
)

export default HomeView
