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
        {/* <div className="section-display__title">{title}</div> */}
        <div className="section-display__message">
          <h2>{message}</h2>
        </div>
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
    {/* <Hero /> */}
    <SectionPanel
      border={true}
      title="intro"
      message="Manage .yourname/ and wallet on the dWeb, with Handshake."
      detail="Namelayer is the<br />on-chain domain manager and non-custodial<br />HNS wallet
for the Handshake blockchain."
    />
    <SectionPanel
      border={true}
      title="mission"
      message="Own top-level domains on the dWeb."
      detail="Now you can manage your names, send and receive HNS, and participate in domain auctions from your native device."
    />
    <SectionPanel
      border={true}
      title="features"
      message="It's not just a wallet."
    />
    <SectionPanel
      border={true}
      title="roadmap"
      message="There's plenty in the pipeline."
    />
  </S.HomeView>
)

export default HomeView
