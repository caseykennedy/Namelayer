import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const SubscribeForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  input[type='email'] {
    flex: 1;
    background: transparent;
    border: var(--border);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    outline: none;
    padding: var(--space-md);
    line-height: normal;

    &::placeholder {
      color: var(--color-text-muted);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md);

    color: var(--color-text);
    font-size: var(--text-base-size);
    font-weight: 600;

    background: var(--color-bg-secondary);
    border: var(--border);
    border-top: none;
    border-bottom-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition-all);
    will-change: transform;

    svg {
      width: 18px;
      transform: rotate(-90deg);

      path {
        fill: var(--color-text);
      }
    }

    &:hover {
      svg {
        transform: rotate(-90deg);
      }
    }
  }
`

export default SubscribeForm
