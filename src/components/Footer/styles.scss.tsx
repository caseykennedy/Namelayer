import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-black);

  /* min-height: 64vh; */

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
  }

  .billboard {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding: var(--gutter);
    color: var(--color-bg);

    .message {
      font-size: var(--text-xxxl);
      margin-bottom: var(--space-xxxl);
    }
  }

  .explore {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: var(--space-md);
    padding: var(--gutter);

    & > * {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;

      background: var(--color-bg);
      border: var(--border);
      border-color: var(--color-tertiary);
      border-radius: var(--radius);

      @media ${breakpoint.tablet} {
        flex-flow: row nowrap;
      }

      .call {
        flex: 1;
        padding: var(--gutter);
      }

      .action {
        flex: 2;
        padding: var(--gutter);

        span {
          margin-top: var(--gutter);
          
          svg {
            transform: rotate(-90deg);
          }
        }
      }
    }
  }
`

export default Footer
