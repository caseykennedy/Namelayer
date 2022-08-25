// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: #151216;
    --color-white: hsl(0, 0%, 100%);

    --color-primary: #151216;
    --color-secondary: hsl(43, 20%, 65%);
    --color-tertiary: #3B323E;

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
