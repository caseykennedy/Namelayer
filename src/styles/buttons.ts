// Buttons
// ___________________________________________________________________

import { css } from 'styled-components'
import { cssVar, lighten } from 'polished'
import { breakpoint, fontSmooth } from './mixins'

// ___________________________________________________________________

const Buttons = css`
  :root {
    --btn-primary-bg: var(--color-primary);
    --btn-primary-color: var(--color-secondary);

    --btn-height: 52px;
    --btn-padding-x: var(--space-xl);
    --btn-padding-y: var(--space-md);
    --btn-font-size: var(--text-base-size);
    --btn-font-weight: 600;
    --btn-radius: var(--radius);

    @media ${breakpoint.tablet} {
      --btn-height: 62px;
      --btn-font-size: var(--text-base-size);
      --btn-padding-x: var(--space-lg);
      --btn-padding-y: var(--space-md);
    }
  }

  /* [data-theme='darkMode'] {
    --btn-primary-bg: var(--color-primary);
    --btn-primary-color: var(--color-secondary);
    --btn-secondary-bg: var(--color-secondary);
    --btn-secondary-color: var(--color-primary);
  } */

  .btn {
    ${fontSmooth}

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);

    background: var(--color-primary);
    border: 1px solid transparent;
    border-radius: var(--btn-radius);

    color: var(--color-bg);
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    white-space: nowrap;
    text-decoration: none;

    height: 62px;
    padding: var(--btn-padding-y) var(--btn-padding-x);

    cursor: pointer;
    transition: var(--transition-all);

    &:active,
    &:hover {
      transform: translateX(2.5px);
    }

    svg {
      width: 18px;

      path {
        fill: var(--color-bg);
      }
    }
  }

  .btn--primary {
    background: var(--color-text);

    &:hover {
      background: var(--color-text-muted);
    }
  }

  .btn--secondary {
    background: var(--color-text-muted);

    &:hover {
      background: var(--color-text);
    }
  }

  .btn--outline {
    background: transparent;
    border: 1px solid var(--color-text);
    color: var(--color-text);

    /* &:hover,
    &:focus {
      background: var(--btn-outline-bg-hover);
      color: var(--color-text);
    } */
  }

  // size
  .btn--sm {
    font-size: var(--text-sm);
    height: calc(var(--btn-height) * 0.75);
    padding-right: calc(var(--btn-padding-x) * 0.5);
    padding-left: calc(var(--btn-padding-x) * 0.5);
  }

  /* .btn--md {
    font-size: var(--btn-font-size);
  } */

  .btn--lg {
    font-size: calc(var(--text-base-size) * 1.1);
    height: calc(var(--btn-height) * 1.25);
    padding-top: calc(var(--btn-padding-y) * 1.25);
    padding-right: calc(var(--btn-padding-x) * 1.25);
    padding-bottom: calc(var(--btn-padding-y) * 1.25);
    padding-left: calc(var(--btn-padding-x) * 1.25);
  }
`

export default Buttons
