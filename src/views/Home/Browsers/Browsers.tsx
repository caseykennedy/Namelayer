// Browsers:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Styles
import * as S from './styles.scss'
import 'swiper/css'
import 'swiper/css/pagination'

// Utils
import { polyVariant, staggerItems, viewport } from '../../../utils/variants'

// Components
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const browserList = [
  {
    type: 'Extension',
    name: 'Bob Extension',
    desc: 'Manage your domains.',
  },
  {
    type: 'Extension',
    name: 'Fingertip',
    desc: 'Manage your domains.',
  },
  {
    type: 'Browser',
    name: 'Beacon',
    desc: 'Manage your domains.',
  },
  {
    type: 'Browser',
    name: 'Opera',
    desc: 'Manage your domains.',
  },
  {
    type: 'Browser',
    name: 'Puma',
    desc: 'Manage your domains.',
  },
  {
    type: 'Browser',
    name: 'Aloha',
    desc: 'Manage your domains.',
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
          connected to the internet.
        </span>
      </p>
    </div>
    <motion.div
      className="grid"
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <Swiper
        spaceBetween={8}
        grabCursor={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '640': {
            spaceBetween: 16,
            slidesPerView: 1,
          },
          '768': {
            spaceBetween: 16,
            slidesPerView: 2,
          },
          '1024': {
            spaceBetween: 16,
            slidesPerView: 3,
          },
        }}
      >
        {browserList.map((browser, idx) => (
          <SwiperSlide key={idx}>
            <motion.div variants={polyVariant} key={idx} className="card">
              <div className="card__figure" />
              <div className="card__name">
                {browser.name}
                <Icon name="arrow" />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </S.Browsers>
)

export default Browsers
