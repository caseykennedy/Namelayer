import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const SubscribeForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  input[type='email'] {
    flex: 1;
    border: var(--border);
    border-color: var(--color-secondary);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    outline: none;
    padding: var(--space-sm);
    line-height: normal;

    &::placeholder {
      color: var(--color-secondary);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-sm);

    color: var(--color-tertiary);
    font-size: var(--text-base-size);
    font-weight: 600;

    background: var(--color-secondary);
    border: none;
    border-bottom-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    cursor: pointer;

    svg {
      fill: var(--color-black);
      margin-left: var(--space-sm);
      width: 14px;
      transform: rotate(-90deg);
    }
  }
`

export default SubscribeForm
