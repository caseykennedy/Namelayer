// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0,0%,0%);
    --color-white: hsl(0,0%,100%);
    --color-blue: hsl(232.9, 100%, 50%);
    --color-magenta: hsl(300,100%,50%);
    --color-yellow: hsl(66.1,100%,50%);
    --color-gray: gray;

    // background
    --color-bg: var(--color-black);
    // typography
    --color-text: var(--color-white);
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
