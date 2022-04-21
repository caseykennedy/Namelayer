// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  background: var(--color-bg);
  border-bottom: var(--border);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--gutter);

  position: sticky;
  top: 0;
  height: var(--header-width);
  width: 100%;

  z-index: 9999;

  @media ${breakpoint.tablet} {
    border-right: var(--border);
    border-bottom: none;
    flex-flow: column nowrap;
    height: 100vh;
    width: var(--header-width);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${breakpoint.tablet} {
      flex-flow: column nowrap;
    }

    .symbol {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wordmark {
      font-family: var(--font-sans);
      font-size: calc(var(--text-base-size) * 1.15);
      font-weight: 600;
      position: relative;
      /* transform-origin: 50%; */

      @media ${breakpoint.tablet} {
        top: var(--space-xxxl);
        transform-origin: center center;
        transform: rotate(90deg);
      }
    }
  }

  .handshake {
    height: var(--icon-size);
    width: var(--icon-size);
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
