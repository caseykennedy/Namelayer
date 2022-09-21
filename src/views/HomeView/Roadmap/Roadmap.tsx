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
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'Domain Manager',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'TLD Marketplace',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'SPV Light Client',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Q1',
    title: 'Fractals',
    desc: 'Manage your domains.',
    state: 'in progress',
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
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8, margin: '200px' }}
    >
      {data.map((item, idx) => (
        <motion.div
          variants={polyVariant}
          className="roadmap-list__item"
          key={idx}
        >
          <div className="roadmap-list__item__quarter">{item.quarter}</div>
          <div className="roadmap-list__item__title">{item.title}</div>
          {/* <div className="roadmap-list__item__desc">{item.desc}</div> */}
          <div className="roadmap-list__item__state">{item.state}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Roadmap>
)

export default Roadmap
