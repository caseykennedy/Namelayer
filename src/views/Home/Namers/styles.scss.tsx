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
    gap: var(--space-xxxxl);
  }

  .detail {
    flex: 1;
    text-align: center;

    @media ${breakpoint.md} {
      text-align: left;
    }

    .sub-heading {
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

    @media ${breakpoint.xl} {
      flex: 2;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gutter-sm);

      @media ${breakpoint.sm} {
        grid-template-columns: repeat(2, 1fr);
      }

      @media ${breakpoint.lg} {
        padding: 0 var(--space-xxxxl) 0;
      }

      @media ${breakpoint.xl} {
        grid-template-columns: repeat(3, 1fr);
      }

      li {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        padding: var(--gutter);
        width: 100%;

        border: var(--border);
        border-radius: var(--radius);
      }
    }
  }
`

export default Namers
