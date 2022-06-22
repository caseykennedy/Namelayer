// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0, 0);
    --color-white: hsl(0, 0, 1);
    --color-gray: gray;

    --color-primary: #8C7746;

    // background
    --color-bg: #E9E8EA;
    // typography
    --color-text: #151216;
    // border
    --color-border: #F2F2F3;
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
