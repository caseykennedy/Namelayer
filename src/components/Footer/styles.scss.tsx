import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-black);
  border-top: var(--border);
  color: var(--color-secondary);

  /* min-height: 64vh; */

  & > * {
    flex: 1;
  }

  .billboard {
    display: flex;
    flex-flow: column-reverse nowrap;
    background: var(--color-black);

    /* min-height: 64vh; */

    @media ${breakpoint.desktop} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    .capture {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: var(--gutter);
      color: var(--color-secondary);

      &__message {
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

        /* background: var(--color-bg); */
        border: var(--border);
        border-color: var(--color-tertiary);
        border-radius: var(--radius);

        @media ${breakpoint.tablet} {
          flex-flow: row nowrap;
        }
      }

      &__call {
        flex: 1;
        border-right: var(--border);
        border-color: var(--color-tertiary);
        padding: var(--gutter-sm);
        font-size: var(--text-md);
      }

      &__action {
        flex: 2;
        padding: var(--gutter-sm);

        /* span {
          margin-top: var(--gutter);
          transform: rotate(-90deg);
        } */

        .btn {
          margin-top: var(--gutter);

          svg {
            transform: rotate(-90deg);
            width: 14px;
          }
        }
      }
    }
  }

  .legal {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: var(--gutter-sm) var(--gutter);

    border-top: var(--border);
    border-color: var(--color-tertiary);
    font-size: var(--text-sm);
  }
`

export default Footer
