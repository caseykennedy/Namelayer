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
    --color-bg: hsl(43, 12%, 65%);
    --color-bg-secondary: hsl(43, 12%, 70%);
    // typography
    --color-text: var(--color-secondary);
    --color-text-muted: hsl(285, 10%, 20%);
    // border
    --color-border: var(--color-text);

    --color-success: hsl(174, 47%, 16%);
    --color-info: hsl(257, 31%, 17%);
    --color-warning: hsl(43, 33%, 28%);
    --color-error: hsl(43, 12%, 70%);
  }

  [data-theme='darkMode'] {
    --color-primary: hsl(257, 5%, 91%);
    --color-secondary: hsl(285, 10%, 8%);
    --color-tertiary: hsl(285, 10%, 16%);

    // background
    --color-bg: hsl(285, 9%, 2%);
    --color-bg-secondary: hsl(285, 10%, 10%);
    // typography
    --color-text: var(--color-primary);
    --color-text-muted: hsl(259, 7%, 60%);
    // border
    --color-border: var(--color-tertiary);
  }
`

export default Colors
