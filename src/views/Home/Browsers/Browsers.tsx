// Browsers:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'

// Styles
import * as S from './styles.scss'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'
import Section from '../../../components/Section'

// ___________________________________________________________________

const data = [
  {
    quarter: 'Extension',
    title: 'Bob Extension',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Extension',
    title: 'Fingertip',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Browser',
    title: 'Beacon',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Browser',
    title: 'Opera',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Browser',
    title: 'Puma',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
  {
    quarter: 'Browser',
    title: 'Aloha',
    desc: 'Manage your domains.',
    state: 'in progress',
  },
]

const Browsers = () => (
  <S.Browsers>
    <div className="detail">
      <p>
        <strong>Use the browser you love</strong>
        <br />
        <span>
          Handshake is a decentralized root zone that works† on any device
          connected to the internet. The internet works as you know it!
        </span>
      </p>
    </div>
    <motion.div
      className="roadmap-list"
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {data.map((item, idx) => (
        <motion.div
          variants={polyVariant}
          className="roadmap-list__item"
          key={idx}
        >
          <div className="roadmap-list__item__title">{item.title}</div>
          {/* <div className="roadmap-list__item__desc">{item.desc}</div> */}
          <div className="roadmap-list__item__state">{item.quarter}</div>
        </motion.div>
      ))}
    </motion.div>
  </S.Browsers>
)

export default Browsers
