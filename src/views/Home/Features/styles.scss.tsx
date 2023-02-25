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
  }

  .detail {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    gap: var(--gutter);
    position: relative;
    padding: var(--gutter);

    @media ${breakpoint.sm} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    .sticky {
      @media ${breakpoint.sm} {
        flex: 1;
        position: sticky;
        top: calc(var(--gutter) + var(--header-width));
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

    img {
      max-height: 650px;
    }
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gutter-sm);
    padding: var(--gutter);
    padding-top: 0;

    @media ${breakpoint.sm} {
      grid-template-columns: repeat(2, 1fr);
    }

    .feature {
      background: var(--color-bg-secondary);
      /* background: linear-gradient(
        0deg,
        var(--color-bg-secondary) 0%,
        rgba(0, 0, 0, 0) 33%
      ); */

      border: var(--border);
      border-radius: var(--radius);
      font-size: var(--text-root-size);
      padding: var(--space-xxxxl) var(--gutter-sm) var(--gutter-sm);

      &__title {
        font-size: var(--text-md);
        font-weight: 600;
        margin-bottom: var(--space-md);
        /* max-width: 10ch; */
      }

      &__desc {
        color: var(--color-text-muted);
        max-width: 33ch;
      }
    }
  }
`

export default Features
