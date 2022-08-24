import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const PrivateKeys = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  @media ${breakpoint.tablet} {
    flex-flow: row-reverse nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .message {
    position: relative;

    p {
      margin-bottom: var(--space-xl);
    }

    p {
      margin-bottom: var(--space-xxxl);
    }

    .sticky {
      position: sticky;
      top: var(--gutter);
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) var(--space-xxl);

    background: var(--color-black);
    border-radius: var(--radius);
    color: var(--color-bg);

    &:hover {
      background: var(--color-black);
    }
  }

  .box {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    border: var(--border);
    border-radius: var(--radius);
    height: 720px;
    width: 100%;
  }
`

export default PrivateKeys
