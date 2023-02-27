import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const PrivateKeys = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  @media ${breakpoint.sm} {
    flex-flow: row-reverse nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .detail {
    position: relative;

    @media ${breakpoint.lg} {
      flex: 1;
    }

    .text-sub-heading {
      color: var(--color-secondary);
    }

    p {
      margin-bottom: var(--space-xxxl);
    }

    .sticky {
      position: sticky;
      top: calc(var(--gutter) + var(--header-width));
    }
  }

  .btn .icon svg {
    transform: rotate(-90deg);
  }

  .box {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    /* border: var(--border); */
    border-radius: var(--radius);
    width: 100%;
  }
`

export default PrivateKeys
