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

  /* .swiper {
    overflow: visible;

    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      text-align: right;
      top: calc(var(--space-xl) * -1);
      bottom: initial;
    }

    .swiper-pagination-bullet {
      background: var(--color-tertiary);
      opacity: 1;
      height: 12px;
      width: 12px;
    }

    .swiper-pagination-bullet-active {
      background: var(--color-primary);
    }
  } */

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-md);

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .card {
    display: flex;
    flex-flow: row nowrap;
    border: var(--border);
    border-radius: var(--radius);
    padding: var(--space-lg) var(--space-md);

    &__name {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      font-size: var(--text-md);
      font-weight: 600;

      span {
        font-size: var(--text-sm);
        margin-left: auto;
      }
    }

    &__symbol {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: var(--space-md);
      height: 52px;
      width: 52px;

      /* background: var(--color-bg-secondary); */
      border: var(--border);
      border-radius: var(--radius-full);
      color: var(--color-text-muted);

      svg {
        max-height: 24px;
        width: 20px;

        path {
        }
      }
    }
  }
`

export default Browsers
