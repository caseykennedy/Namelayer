import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint, textCrop } from '../../../styles/mixins'

// ___________________________________________________________________

export const Roadmap = styled(motion.div)`
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

  .roadmap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gutter);

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    .milestone {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      justify-content: space-between;

      /* background: var(--color-bg-secondary); */
      border-top: var(--border);
      /* border-radius: var(--radius); */
      padding: var(--space-md) 0 var(--gutter);

      &__quarter {
        ${textCrop(1, 0, -0.05)}

        font-size: var(--text-xxl);
        font-weight: 600;
        padding-right: var(--gutter-sm);
      }

      &__title {
        flex: 1;
        font-size: var(--text-base-size);
        font-weight: 600;
      }

      &__progress {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        background: var(--color-success);
        color: var(--color-white);
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
        padding: var(--space-xxs) var(--space-sm);
      }
    }
  }
`

export default Roadmap
