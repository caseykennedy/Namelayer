import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-bg);
  border-top: var(--border);

  /* min-height: 64vh; */

  & > * {
    flex: 1;
  }

  .billboard {
    display: flex;
    flex-flow: column-reverse nowrap;
    /* background: var(--color-bg-secondary); */

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

      &__message {
        font-size: var(--text-xxl);
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
        overflow: hidden;
        width: 100%;

        /* background: var(--color-bg-secondary); */
        border: var(--border);
        border-color: var(--color-tertiary);
        border-radius: var(--radius);

        @media ${breakpoint.tablet} {
          flex-flow: row nowrap;
        }
      }

      &__call {
        flex: 1;
        border-bottom: var(--border);
        border-color: var(--color-tertiary);
        padding: var(--gutter-sm);
        font-size: var(--text-md);

        @media ${breakpoint.tablet} {
          border-bottom: 0;
          border-right: var(--border);
        }
      }

      &__action {
        flex: 2;
        padding: var(--gutter-sm);
        font-size: var(--text-root-size);

        /* span {
          margin-top: var(--gutter);
          transform: rotate(-90deg);
        } */

        .btn {
          margin-top: var(--space-xxl);

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
