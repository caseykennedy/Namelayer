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

    --color-primary: hsl(185, 70%, 70%);
    --color-secondary: hsl(257, 31%, 47%);
    --color-tertiary: hsl(285, 10%, 20%);

    // background
    --color-bg: hsl(43, 12%, 65%);
    --color-bg-secondary: hsl(43, 12%, 70%);
    // typography
    --color-text: hsl(285, 10%, 10%);
    --color-text-muted: hsl(285, 10%, 20%);
    // border
    --color-border: var(--color-text);

    // success
    --color-success-darker: hsl(175, 47%, 16%);
    --color-success-dark: hsl(175, 47%, 36%);
    --color-success: hsl(175, 47%, 62%);
    --color-success-light: hsl(175, 47%, 82%);
    --color-success-lighter: hsl(175, 47%, 92%);

    // info
    --color-info-darker: hsl(257, 31%, 17%);
    --color-info-dark: hsl(257, 31%, 44%);
    --color-info: hsl(257, 31%, 77%);
    --color-info-light: hsl(257, 31%, 84%);
    --color-info-lighter: hsl(257, 31%, 94%);

    // warning
    --color-warning-darker: hsl(43, 33%, 32%);
    --color-warning-dark: hsl(43, 33%, 41%);
    --color-warning: hsl(43, 20%, 75%);
    --color-warning-light: hsl(43, 33%, 84%);
    --color-warning-lighter: hsl(43, 33%, 92%);

    /* --color-error: hsl(43, 12%, 70%); */
  }

  [data-theme='darkMode'] {
    /* --color-primary: hsl(257, 5%, 91%); */
    /* --color-secondary: hsl(285, 10%, 8%); */
    --color-tertiary: hsl(257, 31%, 44%);

    // background
    --color-bg: hsl(285, 9%, 2%);
    --color-bg-secondary: hsl(285, 10%, 10%);
    // typography
    --color-text: hsl(257, 5%, 91%);
    --color-text-muted: hsl(259, 7%, 60%);
    // border
    --color-border: hsl(285, 10%, 16%);
  }
`

export default Colors
