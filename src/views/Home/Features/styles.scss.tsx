import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Features = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);

  .detail {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: var(--gutter);
    position: relative;

    @media ${breakpoint.md} {
      flex-flow: row nowrap;
    }

    @media ${breakpoint.xl} {
      gap: var(--space-xxxxl);
    }

    & > * {
      flex: 1;
      padding: var(--gutter);
    }
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gutter-sm);
    padding: var(--gutter);
    /* padding-top: 0; */

    @media ${breakpoint.sm} {
      grid-template-columns: repeat(2, 1fr);
    }

    .feature {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;

      background: var(--color-bg-secondary);
      border: var(--border);
      border-radius: var(--radius);

      font-size: var(--text-base-size);

      height: 200px;
      padding: var(--gutter-sm);
      position: relative;

      &__title {
        display: flex;
        flex-flow: column nowrap;

        font-size: var(--text-base-size);
        font-weight: 600;
        position: absolute;
      }

      &__desc {
        color: var(--color-text-muted);
        max-width: 30ch;
        margin-top: var(--space-xxxs);
      }
    }
  }
`

export default Features
