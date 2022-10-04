import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Features = styled(motion.div)`
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
      flex: 1 1 250px;
      display: flex;
      flex-flow: column nowrap;

      /* background: var(--color-bg-secondary); */
      border-top: var(--border);
      /* border-radius: var(--radius); */
      font-size: var(--text-root-size);
      padding: var(--space-sm) 0 var(--gutter);

      &__title {
        font-size: var(--text-md);
        font-weight: 600;
        margin-bottom: var(--space-md);
        max-width: 10ch;
      }

      &__desc {
        color: var(--color-text-muted);
      }
    }
  }
`

export default Features
