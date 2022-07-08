// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  /* align-items: center; */
  justify-content: space-between;

  height: 100vh;
  width: var(--header-width);
  padding: var(--gutter);

  position: sticky;
  top: 0;
  
  border-right: var(--border);
  /* border-radius: var(--radius); */

  @media ${breakpoint.tablet} {
    flex-flow: column nowrap;
    width: var(--header-width);
  }

  .logo {
    display: flex;
    align-items: flex-start;
    /* justify-content: space-between; */
    flex-flow: column;
    /* width: fit-content; */

    .symbol {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--space-sm);
    }

    .wordmark {
      font-family: var(--font-sans);
      /* font-size: calc(var(--text-base-size) * 1.15); */
      font-weight: 600;
      position: relative;
      /* transform-origin: 50%; */

      @media ${breakpoint.tablet} {
        /* top: var(--space-xxxl);
        transform-origin: center center;
        transform: rotate(90deg); */
      }
    }
  }

  nav {
    & > * {
      border-top: var(--border);
      cursor: pointer;
      padding: var(--space-md) 0;
      transition: all 0.125s ease-in;

      &:hover {
        background: var(--color-text);
        color: var(--color-bg);
        padding-left: var(--space-md);
      }
    }
  }
`

export default Header
