// Team:
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const teamData = [
  {
    name: 'Taylor',
    quote: 'The domain space has been opened up for the users.',
    handle: '🥷',
    title: 'product',
  },
  {
    name: 'Chris',
    quote: 'Good design is tasty.',
    handle: '🕉',
    title: 'creative',
  },
  {
    name: 'Casey',
    quote: 'A decentralized internet is key for digital sovereignty.',
    handle: '🧀',
    title: 'dev',
  },
  {
    name: 'Jacky',
    quote: 'Open-source code guarantees collaborative iteration.',
    handle: '🐈‍⬛',
    title: 'advisor',
  },
  {
    name: 'Chjango',
    quote: 'A free internet means prosperity for all.',
    handle: '👩‍🚀',
    title: 'advisor',
  },
]

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
          <span>Dedicated to decentralization</span>
        </p>
        {/* <h2>There&apos;s plenty in the pipeline.</h2> */}
      </div>
      {/* <motion.div
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
      </motion.div> */}
      <motion.div
        className="team-list"
        variants={staggerItems}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {teamData.map((item, idx) => (
          <motion.div variants={polyVariant} className="mate" key={idx}>
            <div className="mate__name">
              <div className="emoji">{item.handle}</div>
              {item.name}
            </div>
            <div className="mate__quote">&quot;{item.quote}&quot;</div>
            <div className="mate__position">{item.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </S.Team>
  )
}

export default Team
