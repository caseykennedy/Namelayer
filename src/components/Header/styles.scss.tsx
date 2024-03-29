// Header Styles:

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Header = styled.header`
  background: var(--color-bg);
  border-bottom: var(--border);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: 0 var(--gutter);
  height: var(--header-width);
  width: 100%;
  z-index: 9999;

  @media ${breakpoint.sm} {
    border-right: var(--border);
    border-bottom: none;
    flex-flow: column nowrap;
    padding: var(--space-lg) 0;
    height: 100vh;
    width: var(--header-width);
  }

  .symbol {
    display: flex;
    place-content: center;
  }

  .wordmark {
    font-family: var(--font-sans);
    font-weight: 600;
    display: var(--display-hide-mobile);
    position: relative;

    @media ${breakpoint.sm} {
      transform-origin: center center;
      transform: rotate(-90deg);
    }
  }

  .utilities {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--space-sm);

    @media ${breakpoint.sm} {
      flex-flow: column nowrap;
      justify-content: center;
    }

    .twitter {
      display: none;
      place-content: center;

      @media ${breakpoint.sm} {
        display: flex;
      }
    }

    .menu-toggle {
      display: flex;
      place-content: center;
      padding: 0;
      background-color: transparent;
      border: none;
      color: var(--color-text);
      cursor: pointer;

      @media ${breakpoint.sm} {
        display: none;
      }
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
