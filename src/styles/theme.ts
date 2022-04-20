// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 1px solid var(--color-blue);
    // Header
    --header-width: calc(var(--space-unit) * 5);

    @media ${theme.mq.tablet} {
    }
  }

  /* @supports (--css: variables) {
    @media ${theme.mq.tablet} {
      :root,
      * {
      }
    }
  } */
`

export default Theme
