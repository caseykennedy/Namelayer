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
    --btn-secondary-bg: var(--color-secondary);
    --btn-secondary-color: var(--color-primary);

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

  .btn {
    ${fontSmooth}

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);

    background: var(--color-black);
    border: 1px solid transparent;
    border-radius: var(--btn-radius);

    color: var(--color-secondary);
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    white-space: nowrap;
    text-decoration: none;

    height: 62px;
    padding: var(--btn-padding-y) var(--btn-padding-x);

    cursor: pointer;
    transition: var(--transition-all);
    will-change: transform;

    &:active,
    &:hover {
      transform: translateY(1.5px);
    }
  }

  .btn--primary {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-color);

    &:hover {
    }

    svg {
      width: 18px;

      path {
        fill: var(--color-secondary);
      }
    }
  }

  .btn--secondary {
    background: var(--btn-secondary-bg);
    color: var(--btn-secondary-color);

    /* &:hover {
      background: var(--color-accent-dark);
      color: var(--color-white);
    } */

    /* svg {
      path {
        fill: var(--color-primary);
      }
    } */
  }

  .btn--outline {
    background: transparent;
    border: 1px solid;
    color: var(--color-secondary);

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
