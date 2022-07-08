// Global styles
// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../../config/theme'

import Reset from './reset'
import Colors from './colors'
import Spacing from './spacing'
import Theme from './theme'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Colors}
  ${Spacing}
  ${Typography}
  ${Theme}

  html,
  body {
    background: var(--color-bg);
  }

  body {
    overscroll-behavior-y: none;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  /* ::-webkit-scrollbar {
    width: ${theme.space[4]};
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.background};
    border-left: ${theme.border};
    border-color: ${theme.colors.black};
  }

  ::-webkit-scrollbar-thumb:hover {
  } */
`

export default GlobalStyles

// ___________________________________________________________________
