import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Features = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .detail {
    position: relative;
  }

  .sticky {
    position: sticky;
    top: var(--gutter);

    p {
      margin-bottom: var(--space-xxxl);
    }
  }

  .feature-list {
    display: flex;
    flex-flow: row wrap;
    gap: var(--space-md);

    .feature {
      flex: 1 1 200px;
      display: flex;
      flex-flow: column nowrap;

      background: var(--color-black);
      border: var(--border);
      border-radius: var(--radius);
      color: var(--color-bg);
      font-size: var(--text-root-size);
      padding: var(--gutter-sm);

      &__title {
        font-size: var(--text-md);
        font-weight: 600;
        margin-bottom: var(--space-md);
      }

      &__desc {
      }
    }
  }
`

export default Features