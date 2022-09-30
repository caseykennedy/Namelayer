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

    --color-primary: hsl(44, 2%, 61%);
    --color-secondary: hsl(285, 10%, 8%);
    --color-tertiary: hsl(285, 8%, 24%);

    // background
    --color-bg: var(--color-primary);
    --color-bg-secondary: hsl(44, 2%, 65%);
    // typography
    --color-text: var(--color-secondary);
    --color-text-muted: hsl(252, 3%, 30%);
    // border
    --color-border: var(--color-tertiary);
  }

  [data-theme='darkMode'] {
    --color-primary: hsl(44, 2%, 61%);
    --color-secondary: hsl(285, 10%, 8%);
    --color-tertiary: hsl(285, 8%, 24%);

    // background
    --color-bg: var(--color-secondary);
    --color-bg-secondary: hsl(285, 10%, 10%);
    // typography
    --color-text: var(--color-primary);
    --color-text-muted: hsl(252, 3%, 42%);
    // border
    --color-border: var(--color-tertiary);
  }
`

export default Colors
