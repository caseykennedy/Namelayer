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
    name: 'Taylor Martens',
  },
  {
    name: 'Chris Mena',
  },
  {
    name: 'Casey Kennedy',
  },
  {
    name: 'Jackie Chan',
  },
  {
    name: 'Chjango Unchained',
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
      {data.map((pal, idx) => (
        <motion.div variants={polyVariant} key={idx}>
          <div>{pal.name}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Team>
)

export default Team
