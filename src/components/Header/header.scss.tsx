// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Header = styled.header`
  background: var(--color-bg);
  border-right: var(--border);

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--gutter);

  height: 100vh;
  width: var(--header-width);

  z-index: 9999;

  .logo {
    position: relative;
    top: var(--space-xxl);

    .wordmark {
      /* position: absolute;
      top: 0;
      left: 0; */

      transform-origin: center center;
      transform: rotate(90deg);
      /* transform-origin: 50%; */
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  .wordmark {
    transform-origin: center center;
    transform: rotate(90deg);
    /* transform-origin: 50%; */
  }
`
