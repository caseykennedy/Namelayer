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

    --color-primary: hsl(285, 10%, 10%);
    --color-secondary: hsl(285, 10%, 10%);
    --color-tertiary: hsl(285, 10%, 20%);

    // background
    --color-bg: hsl(43, 16%, 65%);
    --color-bg-secondary: hsl(43, 16%, 68%);
    // typography
    --color-text: var(--color-secondary);
    --color-text-muted: hsl(285, 10%, 20%);
    // border
    --color-border: var(--color-tertiary);

    --color-success: hsl(175, 47%, 32%);
    --color-info: hsl(257, 31%, 27%);
    --color-warning: hsl(43, 57%, 37%);
    --color-error: hsl(43, 16%, 68%);
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
