// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: #000000;
    --color-white: hsl(0, 0%, 100%);

    --color-primary: #000000;
    --color-secondary: hsl(43, 20%, 65%);
    --color-tertiary: hsl(43, 11%, 28%);

    // background
    --color-bg: var(--color-secondary);
    // typography
    --color-text: var(--color-black);
    --color-text-muted: var(--color-tertiary);
    // border
    --color-border: var(--color-black);
  }

  [data-theme='darkMode'] {
    // base
    --color-black: #000000;
    --color-white: hsl(0, 0%, 100%);

    // background
    --color-bg: var(--color-black);
    // typography
    --color-text: var(--color-secondary);
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
