import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Team = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--gutter);
  border-top: var(--border);

  .row {
    margin-bottom: var(--space-xxxl);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    gap: var(--space-md);

    color: var(--color-secondary);

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
      /* grid-template-rows: repeat(2, 1fr); */
    }

    @media ${breakpoint.desktop} {
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: repeat(2, 1fr); */
    }

    .card {
      flex: 1 1 240px;
      display: flex;
      flex-flow: column nowrap;

      padding: var(--gutter-sm);
      background: var(--color-black);
      border: var(--border);
      border-radius: var(--radius);

      &__name {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;

        font-size: var(--text-md);
        font-weight: 600;
        margin-bottom: var(--space-md);

        span {
          font-size: var(--text-sm);
          /* font-weight: 400; */
          margin-left: auto;
        }
      }

      &__quote {
        margin-bottom: var(--space-md);
      }

      &__figure {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: var(--space-md);
        height: 222px;

        border: var(--border);
        border-color: var(--color-text-muted);
        border-radius: var(--radius);
        color: var(--color-text-muted);
      }
    }
  }
`

export default Team
