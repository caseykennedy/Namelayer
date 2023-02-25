import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Intro = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--gutter);

  .row {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--space-xxxl);

    @media ${breakpoint.sm} {
      flex-flow: row nowrap;
    }

    &:first-child {
      margin-bottom: var(--space-xxxl);
    }

    & > * {
      flex: 1;
    }
  }

  .figure {
    margin-bottom: var(--space-lg);
  }
`

export default Intro
