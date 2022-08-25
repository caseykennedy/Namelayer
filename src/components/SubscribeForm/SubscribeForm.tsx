// Subscribe Form Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

const SubscribeForm = () => (
  <S.SubscribeForm
    name="Fresh Bakin' Subscribe"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="Fresh Bakin' Subscribe" />

    {/* <label htmlFor="email" style={{ display: 'none' }}>
        Email address:
      </label> */}
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email address"
      required={true}
      className="form-control"
    />

    <button type="submit" value="Submit form">
      Subscribe
      <Icon name="carat" color="var(--color-secondary)" />
    </button>
  </S.SubscribeForm>
)

export default SubscribeForm
