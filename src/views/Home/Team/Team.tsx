// Team:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styles
import * as S from './styles.scss'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const teamData = [
  {
    name: 'Taylor',
    quote: 'The domain space has been opened up for the users',
    handle: '🥷/',
    title: 'product',
  },
  {
    name: 'Chris',
    quote: 'Good design is tasty.',
    handle: '🕉/',
    title: 'creative',
  },
  {
    name: 'Case',
    quote: 'A decentralized internet is key for digital sovereignty.',
    handle: '🧀/',
    title: 'dev',
  },
  {
    name: 'Jacky',
    quote: 'Open-source code guarantees collaborative iteration.',
    handle: '🐈‍⬛/',
    title: 'advisor',
  },
  {
    name: 'Chjango',
    quote: 'A free internet means prosperity for all.',
    handle: '👩‍🚀/',
    title: 'advisor',
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

const Team = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })
  useEffect(() => {
    const fetchData = async () => {
      if (inView) {
        await controls.start('visible')
      }
    }
    fetchData().catch(console.error)
  }, [controls, inView])
  return (
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
        animate={controls}
        initial="hidden"
        variants={staggerItems}
        ref={ref}
      >
        {teamData.map((member, idx) => (
          <motion.div variants={polyVariant} key={idx} className="card">
            <div className="card__name heading">
              {member.name}
              <span>{member.title}</span>
            </div>
            <div className="card__figure">figure</div>
            <div className="card__quote">{member.quote}</div>
            <div className="card__handle">{member.handle}</div>
          </motion.div>
        ))}
      </motion.div>
    </S.Team>
  )
}

export default Team
