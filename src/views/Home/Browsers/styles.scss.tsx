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
    background: var(--color-bg-secondary);
    background: linear-gradient(
      0deg,
      var(--color-bg-secondary) 0%,
      rgba(0, 0, 0, 0) 33%
    );
    border: var(--border);
    border-radius: var(--radius);
    padding: var(--space-md);

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

        path {
          fill: var(--color-text-muted);
        }
      }
    }

    &__figure {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 375px;

      /* background: var(--color-bg-secondary); */
      /* border: var(--border); */
      border-radius: var(--radius);
      color: var(--color-text-muted);
    }
  }
`

export default Browsers
