// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import { breakpoint } from './mixins'

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

    @media ${breakpoint.sm} {
      // Display
      --display-hide-mobile: initial;
    }

    // box shadow
    --shadow-xs: 0 0.5px 1px rgba(0, 0, 0, 0.06),
      1px 1px 2px rgba(0, 0, 0, 0.12);
    --shadow-sm: 0 0.3px 0.4px rgba(0, 0, 0, 0.025),
      1px 0.9px 1.25px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);

    --shadow-md: 0 0 0 hsla(257, 31%, 44%, 0.25),
      0 2px 5px hsla(257, 31%, 44%, 0.25), 0 7px 15px hsla(257, 31%, 44%, 0.25);

    --shadow-lg: 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014),
      0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038),
      0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085),
      0 30px 42px -1px rgba(0, 0, 0, 0.15);
  }

  /* @supports (--css: variables) {
    @media ${breakpoint.sm} {
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
