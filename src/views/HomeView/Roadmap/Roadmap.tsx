// Roadmap:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const data = [
  {
    quarter: 'Q1',
    title: 'Non-custodial Wallet',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'Domain Manager',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'TLD Marketplace',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'SPV Light Client',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'Fractals',
    desc: 'Manage your decentralized domains and on-chain DNS.',
    state: 'in progress',
  },
]

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
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
}

const Roadmap = () => (
  <S.Roadmap>
    <div className="detail">
      <p>
        <strong>Roadmap</strong>
        <br />
        <span>There&apos;s plenty in the pipeline.</span>
      </p>
      {/* <h2>There&apos;s plenty in the pipeline.</h2> */}
    </div>
    <motion.div
      className="roadmap-list"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
    >
      {data.map((item, idx) => (
        <motion.div variants={polyVariant} className="roadmap-list__item" key={idx}>
          <div className="roadmap-list__item__quarter">{item.quarter}</div>
          <div className="roadmap-list__item__title">{item.title}</div>
          <div className="roadmap-list__item__desc">{item.desc}</div>
          <div className="roadmap-list__item__state">{item.state}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Roadmap>
)

export default Roadmap
