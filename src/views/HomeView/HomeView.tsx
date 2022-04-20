// HomePage:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

import Section from '../../components/Section'

// ___________________________________________________________________

const HomeView = () => (
  <S.HomeView>
    <Section>
      <h1>HODL your domains/</h1>
    </Section>
  </S.HomeView>
)

export default HomeView
