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

// ___________________________________________________________________

const Hero = () => (
  <Section>
    <h1>Manage .yourname/ on the dWeb with Handshake.</h1>
    <p>
      Namelayer is your on-chain domain manager and non-custodial HNS wallet for
      the Handshake blockchain.
    </p>
    <div>
      <Rings />
    </div>
  </Section>
)

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: '0.333s',
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.02 },
  },
}

const ProjectMeta = () => (
  <Section>
    <S.ProjectMeta variants={svgVariant} initial="hidden" animate="visible">
      <motion.div variants={polyVariant}>
        Built by namers: taylor, chris, casey
      </motion.div>
      <motion.div variants={polyVariant}>
        Built by namers: taylor, chris, casey
      </motion.div>
      <motion.div variants={polyVariant}>
        Built by namers: taylor, chris, casey
      </motion.div>
    </S.ProjectMeta>
  </Section>
)

const HomeView = () => (
  <S.HomeView>
    <Hero />
    <ProjectMeta />
  </S.HomeView>
)

export default HomeView
