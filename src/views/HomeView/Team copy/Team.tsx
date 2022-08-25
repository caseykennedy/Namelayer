// Team:
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

const Team = () => (
  <S.Team>
    <div className="row">
      <p>
        <strong>Team</strong>
        <br />
        <span>Dedicated to decentralization.</span>
      </p>
      {/* <h2>There&apos;s plenty in the pipeline.</h2> */}
    </div>
    <motion.div
      className="grid"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
    >
      {data.map((feat, idx) => (
        <motion.div variants={polyVariant} key={idx}>
          <div>{feat.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Team>
)

export default Team
