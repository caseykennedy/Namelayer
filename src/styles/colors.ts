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
    --color-secondary: hsl(43, 10%, 65%);
    --color-tertiary: hsl(285, 8%, 24%);


    /* --color-secondary: #D06952; */

    // background
    --color-bg: var(--color-primary);
    --color-bg-secondary: hsl(285, 10%, 10%);
    // typography
    --color-text: var(--color-secondary);
    --color-text-muted: hsla(43, 10%, 55%, 0.75);
    // border
    --color-border: var(--color-tertiary);
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
