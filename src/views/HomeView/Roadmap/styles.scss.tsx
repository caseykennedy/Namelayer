import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Roadmap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--gutter);
  border-top: var(--border);

  & > * {
    flex: 1;
  }

  .detail {
    position: relative;
    margin-bottom: var(--space-xxxl);
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
    flex-flow: column wrap;
    gap: var(--space-md);

    .feature {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;

      background: var(--color-black);
      border: var(--border);
      border-radius: var(--radius);
      color: var(--color-bg);
      font-size: var(--text-root-size);
      padding: var(--space-xl);

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

export default Roadmap
