import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Features = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .detail {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    gap: var(--gutter);
    position: relative;

    @media ${breakpoint.desktop} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    .sticky {
      @media ${breakpoint.tablet} {
        position: sticky;
        top: calc(var(--gutter) + var(--header-width));
      }

      @media ${breakpoint.desktop} {
        flex: 0.5;
      }

      p {
        margin-bottom: var(--space-xxxl);
      }

      ul {
        margin-bottom: var(--space-xxl);
      }
    }
  }

  .figure {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 600px;
  }

  .feature-list {
    display: flex;
    flex-flow: row wrap;
    gap: var(--space-md);

    .feature {
      flex: 1 1 333px;
      display: flex;
      flex-flow: column nowrap;

      background: var(--color-bg-secondary);
      background: linear-gradient(
        0deg,
        var(--color-bg-secondary) 0%,
        rgba(0, 0, 0, 0) 33%
      );

      border: var(--border);
      border-radius: var(--radius);
      font-size: var(--text-root-size);
      padding: var(--gutter-sm);

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
