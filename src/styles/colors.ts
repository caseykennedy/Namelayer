// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);
    --color-gray: gray;

    --color-primary: #322e3c;
    --color-secondary: #998a66;

    // background
    --color-bg: #d4d2d6;
    // typography
    --color-text: var(--color-primary);
    // border
    --color-border: var(--color-primary);
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
