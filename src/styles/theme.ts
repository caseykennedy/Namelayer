// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import breakpoint from '../utils/breakpoint'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 1px solid var(--color-border);

    // Header
    --header-width: 4rem;

    // Icons
    --icon-size: 1.75rem;

    // radius
    --radius: 0.5rem; // border radius base size
    --radius-xs: calc(var(--radius) / 3);
    --radius-sm: calc(var(--radius) / 2);
    --radius-md: calc(var(--radius) * 2);
    --radius-lg: calc(var(--radius) * 4);
    --radius-full: 50%;

    // transitions
    --transition: 0.175s ease;
    --transition-all: all var(--transition);

    // Display
    --display-hide-mobile: none;

    @media ${breakpoint.tablet} {
      // Display
      --display-hide-mobile: initial;
    }
  }

  /* @supports (--css: variables) {
    @media ${breakpoint.tablet} {
      :root,
      * {
      }
    }
  } */

  html,
  body {
    background: var(--color-bg);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    // font-family: 'fontName';
    height: var(--icon-xs);
    width: var(--icon-xs);
  }

  .bg-gradient {
    background: var(--color-bg-secondary);
    background: linear-gradient(
      0deg,
      var(--color-bg-secondary) 0%,
      rgba(0, 0, 0, 0) 33%
    );
  }
`

export default Theme
