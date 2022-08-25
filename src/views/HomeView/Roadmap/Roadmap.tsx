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
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    desc: 'Manage your decentralized domains and on-chain DNS.',
  },
  {
    desc: 'Manage your decentralized domains and on-chain DNS.',
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
      className="feature-list"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
    >
      {data.map((feat, idx) => (
        <motion.div variants={polyVariant} className="feature" key={idx}>
          <div className="feature__desc">{feat.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Roadmap>
)

export default Roadmap
