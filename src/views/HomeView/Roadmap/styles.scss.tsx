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

  .roadmap-list {
    display: flex;
    flex-flow: column wrap;
    gap: var(--space-md);

    &__item {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      background: var(--color-black);
      border: var(--border);
      border-radius: var(--radius);
      color: var(--color-bg);
      font-size: var(--text-root-size);
      padding: var(--space-xl);

      &__quarter {
        padding-right: var(--gutter);
      }

      &__title {
        flex: 1;
        font-size: var(--text-md);
        font-weight: 600;
      }

      &__desc {
      }

      &__state {
        padding-left: var(--gutter);
      }
    }
  }
`

export default Roadmap
