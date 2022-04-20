// Layout:
// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './layout.scss.'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  // location?: {
  //   pathname: string
  // }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log(
    `%c namelayer | decentralize the internet | built by tetra/ `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      {/* <Footer /> */}
    </S.Wrapper>
  )
}

export default Layout
