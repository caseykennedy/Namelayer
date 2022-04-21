// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../../config/theme'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 2px solid var(--color-blue);
    
    // Header
    --header-width: calc(var(--space-unit) * 5);
    
    // Icons
    --icon-size: 1.75rem;

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

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    // font-family: 'fontName';
    height: var(--icon-xs);
    width: var(--icon-xs);
  }
`

export default Theme
