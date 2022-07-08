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

    --color-primary: #251e39;
    --color-secondary: #998A66;

    // background
    --color-bg: #d4d2d6;
    // typography
    --color-text: #151216;
    // border
    --color-border: #151216;
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
