/* eslint-disable react/no-danger */
// HomeView:
// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import * as S from './styles.scss'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'

// ___________________________________________________________________

type SectionPanelProps = {
  border?: boolean
  title?: string
  message?: string
  detail?: string
  children?: React.ReactNode
}

const SectionPanel = ({
  border,
  title,
  message,
  detail,
  children,
}: SectionPanelProps) => (
  <Section>
    <S.SectionPanel>
      <div className="section-display">
        <h1>{message}</h1>
      </div>
      <div className="section-space">{children}</div>
      {detail && (
        <div className="section-detail">
          <p dangerouslySetInnerHTML={{ __html: detail }} />
        </div>
      )}
    </S.SectionPanel>
  </Section>
)

const Hero = () => (
  <Section>
    <S.Hero>
      <div>
        {/* <div className="sub">native HNS wallet coming 2022</div> */}
        <h1>Namelayer</h1>
      </div>
      <div className="arrow">
        <Icon name="arrow" />
      </div>
    </S.Hero>
  </Section>
)

const HomeView = () => (
  <S.HomeView>
    <h1>Manage .yourname/ on the dWeb with Handshake.</h1>
    <p>
      Namelayer is your on-chain domain manager and non-custodial HNS wallet for
      the Handshake blockchain.
    </p>
  </S.HomeView>
)

export default HomeView
