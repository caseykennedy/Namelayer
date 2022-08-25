import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Button = styled.a`
  --btn-primary-bg: var(--color-primary);
  --btn-primary-color: var(--color-white);

  /* --btn-height: 36px; */
  --btn-font-size: var(--text-base-size);
  --btn-padding-x: var(--space-md);
  --btn-padding-y: var(--space-xs);
  --btn-radius: var(--radius-lg);

  @media ${breakpoint.tablet} {
    /* --btn-height: 40px; */
    --btn-font-size: var(--text-base-size);
    --btn-padding-x: var(--space-md);
    --btn-padding-y: var(--space-sm);
  }

  background: var(--color-gray);
  border: 1px solid transparent;
  /* height: var(--btn-height); */

  @include fontSmooth;
  color: var(--color-text);
  text-decoration: none;
  text-transform: capitalize;

  cursor: pointer;
  transition: var(--transition-all);
  will-change: transform;

  &:active {
    transform: translateY(1.5px);
  }

  .btn--primary {
    background: var(--btn-primary-bg);
    color: var(--btn-primary-color);

    &:hover {
      background: var(--color-accent-dark);
      color: var(--color-white);
    }

    &:focus {
      background: var(--color-accent-darker);
      color: var(--color-white);
    }
  }
`

export default Button
