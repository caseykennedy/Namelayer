// Layout:
// ___________________________________________________________________

import React from 'react'

// Components
import Header from '../Header'
import Navigation from '../Navigation'
import Footer from '../Footer'
import SmoothScroll from '../SmoothScroll'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  // location?: {
  //   pathname: string
  // }
}

const Layout = ({ children }: LayoutProps) => {
  console.log(
    `%c namelayer | decentralize the internet | built by tetra/ `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Content>
          <Navigation />
          {/* <SmoothScroll>{children}</SmoothScroll> */}
          {children}
        </S.Content>
      </S.Wrapper>
      <Footer />
    </>
  )
}

export default Layout
