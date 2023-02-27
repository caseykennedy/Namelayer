import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Namers = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: var(--gutter);
  border-top: var(--border);
  padding: var(--gutter);

  @media ${breakpoint.md} {
    flex-flow: row nowrap;
  }

  @media ${breakpoint.xl} {
    /* gap: var(--space-xxl); */
  }

  .detail {
    flex: 1;
    text-align: center;

    @media ${breakpoint.md} {
      text-align: left;
    }

    .text-sub-heading {
      color: var(--color-tertiary);
    }

    h2 {
      max-width: 14ch;
      margin-right: auto;
      margin-left: auto;

      @media ${breakpoint.md} {
        margin-right: initial;
        margin-left: initial;
      }
    }

    p {
      max-width: 44ch;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: var(--space-xxxl);

      @media ${breakpoint.md} {
        margin-right: initial;
        margin-left: initial;
      }
    }
  }

  .list {
    flex: 1;
    position: relative;

    /* @media ${breakpoint.xl} {
      flex: 2;
    } */

    ul {
      display: grid;
      grid-auto-rows: 1fr;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gutter-sm);
      margin: 0 auto 0;

      @media ${breakpoint.sm} {
        grid-template-columns: repeat(2, 1fr);
      }

      @media ${breakpoint.lg} {
        /* padding: 0 0 0 var(--space-xxxxl); */
      }

      @media ${breakpoint.xl} {
        grid-template-columns: repeat(3, 1fr);
      }

      li {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;

        aspect-ratio: 1/1;
        padding: var(--gutter-sm);

        border: var(--border);
        border-radius: var(--radius);
        font-size: var(--text-base-size);

        span {
          margin: 0;

          svg {
            width: var(--space-xl);
            margin-bottom: var(--space-xl);
          }
        }
      }
    }
  }
`

export default Namers
