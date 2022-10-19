// Navigation Styles:

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Navigation = styled.div`
  background: var(--color-bg);
  border-bottom: var(--border);

  display: none;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: 0 var(--gutter);
  height: var(--header-width);
  width: 100%;
  z-index: 9999;

  @media ${breakpoint.tablet} {
    display: flex;
  }

  nav {
    display: flex;
    gap: var(--gutter-sm);

    a {
      color: var(--color-text);
      font-size: var(--text-root-size);

      &:hover {
        color: var(--color-text-muted);
      }
    }
  }

  .utilities {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--gutter-sm);

    .theme-toggle {
      display: flex;
      place-content: center;
      padding: 0;
      font-size: 1.5rem;
      background-color: transparent;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      transition: color var(--transition);

      &:hover {
        color: var(--color-text-muted);
      }
    }

    .pill {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-lg);

      background: var(--color-bg-secondary);
      border: var(--border);
      border-radius: var(--radius-lg);

      color: var(--color-text-muted);
      font-size: var(--text-sm);
      font-weight: var(--btn-font-weight);
      white-space: nowrap;
      text-decoration: none;

      /* height: calc(var(--btn-height) * 0.75); */
      padding: calc(var(--btn-padding-y) * 0.75)
        calc(var(--btn-padding-x) * 0.75);

      transition: var(--transition-all);

      /* &:active,
      &:hover {
        transform: translateX(2.5px);
      } */

      svg {
        width: 18px;

        path {
          fill: var(--color-bg);
        }
      }
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  .wordmark {
    transform-origin: center center;
    transform: rotate(90deg);
    /* transform-origin: 50%; */
  }
`
