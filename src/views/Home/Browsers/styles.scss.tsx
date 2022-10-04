import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Browsers = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  padding: var(--gutter);
  border-top: var(--border);

  & > * {
    flex: 1;
  }

  .detail {
    position: relative;
    margin-bottom: var(--space-xxxl);

    max-width: 38ch;
  }

  .sticky {
    position: sticky;
    top: var(--gutter);

    p {
      margin-bottom: var(--space-xxxl);
    }
  }

  .swiper {
    overflow: visible;
  }

  .card {
    display: flex;
    flex-flow: column nowrap;

    padding: var(--space-md);
    background: var(--color-bg-secondary);
    border-top: var(--border);
    /* border-radius: var(--radius); */

    &__name {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      /* justify-content: space-between; */

      font-size: var(--text-md);
      font-weight: 600;
      margin-top: var(--space-md);

      span {
        font-size: var(--text-sm);
        margin-left: auto;
      }

      svg {
        width: 18px;
        transform: rotate(-90deg);

        path {
          fill: var(--color-text-muted);
        }
      }
    }

    &__figure {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 444px;

      background: var(--color-bg-secondary);
      /* border: var(--border); */
      border-radius: var(--radius);
      color: var(--color-text-muted);
    }
  }
`

export default Browsers
