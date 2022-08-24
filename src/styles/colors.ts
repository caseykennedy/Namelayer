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

    --color-primary: #BCB2D7;
    --color-secondary: #CCC5B3;
    --color-tertiary: #BBE7E3;
    --color-quaternary: #FAC6B2;
    --color-quintary: #706c64;

    // background
    --color-bg: #706c64;
    // typography
    --color-text: #000000;
    --color-text-muted: hsl(40, 6%, 22%);
    // border
    --color-border: #000000;
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
