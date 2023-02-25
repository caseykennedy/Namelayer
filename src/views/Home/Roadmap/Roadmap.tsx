// Roadmap:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles.scss'
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

import Grid from '../../../components/SVG/Grid'

// ___________________________________________________________________

const data = [
  {
    quarter: 'Q1',
    title: 'Non-custodial Wallet',
    progress: 'in progress',
    progressColor: 'success',
  },
  {
    quarter: 'Q1',
    title: 'Domain Manager',
    progress: 'in progress',
    progressColor: 'success',
  },
  {
    quarter: 'Q2',
    title: 'TLD Marketplace',
    progress: 'ready',
    progressColor: 'info',
  },
  {
    quarter: 'Q2',
    title: 'SPV Light Client',
    progress: 'ready',
    progressColor: 'info',
  },
  {
    quarter: 'Q3',
    title: 'SPV Light Client',
    progress: 'upcoming',
    progressColor: 'warning',
  },
  {
    quarter: 'Q4',
    title: 'Fractals',
    progress: 'upcoming',
    progressColor: 'warning',
  },
]

const Roadmap = () => (
  <S.Roadmap id="roadmap">
    <div className="detail">
      <p>
        <strong>Roadmap</strong>
      </p>
      {/* <h2>There&apos;s plenty in the pipeline.</h2> */}
    </div>
    {/* <div className="decorator">
      <Grid />
    </div> */}
    <motion.div
      className="roadmap"
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {data.map((item, idx) => (
        <motion.div variants={polyVariant} className="milestone" key={idx}>
          <div className="milestone__quarter">{item.quarter}</div>
          <div className="milestone__title">{item.title}</div>
          <div
            className="milestone__progress"
            style={{
              background: `var(--color-${item.progressColor}-darker)`,
              borderColor: `var(--color-${item.progressColor}-dark)`,
              color: `var(--color-${item.progressColor})`,
            }}
          >
            {item.progress}
          </div>
        </motion.div>
      ))}
    </motion.div>
    <div className="mask" />
  </S.Roadmap>
)

export default Roadmap
