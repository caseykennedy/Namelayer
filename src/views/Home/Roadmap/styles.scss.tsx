import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint, textCrop } from '../../../styles/mixins'

// ___________________________________________________________________

export const Roadmap = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  /* border-top: var(--border); */
  padding: var(--gutter);
  position: relative;

  & > * {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    background: var(--color-border);
    -webkit-mask-image: linear-gradient(#000 1px, transparent 0),
      linear-gradient(90deg, #000 1px, transparent 0);
    mask-image: linear-gradient(#000 1px, transparent 0),
      linear-gradient(90deg, #000 1px, transparent 0);
    -webkit-mask-position: top center;
    mask-position: top center;
    -webkit-mask-size: 28px 28px;
    mask-size: var(--space-xl) var(--space-xl);
  }

  .detail {
    position: relative;
    margin-bottom: var(--space-xxxl);
  }

  .decorator {
    margin-bottom: var(--space-xl);
    padding-top: calc(var(--space-xxxxl) * 3);
  }

  .roadmap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gutter);

    @media ${breakpoint.sm} {
      grid-template-columns: repeat(2, 1fr);
    }

    .milestone {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      background: var(--color-bg);
      /* border: var(--border); */
      /* border-radius: var(--radius); */
      padding: var(--space-xxxl) var(--gutter);

      &__quarter {
        ${textCrop(1, 0, -0.05)}

        font-size: var(--text-xl);
        font-weight: 500;
        padding-right: var(--gutter-sm);

        /* @media ${breakpoint.sm} {
          font-size: var(--text-xl);
        } */
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
        border: var(--border);
        color: var(--color-white);
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
        padding: var(--space-xxs) var(--space-sm);
      }
    }
  }
`

export default Roadmap
