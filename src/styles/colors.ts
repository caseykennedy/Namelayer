// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(285, 10%, 10%);
    --color-white: hsl(0, 0%, 100%);

    --color-primary: hsl(285, 10%, 8%);
    --color-secondary: hsl(43, 20%, 65%);
    --color-tertiary: hsl(285, 8%, 24%);


    /* --color-secondary: #D06952; */

    // background
    --color-bg: var(--color-secondary);
    // typography
    --color-text: var(--color-black);
    --color-text-muted: var(--color-tertiary);
    // border
    --color-border: var(--color-black);
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
