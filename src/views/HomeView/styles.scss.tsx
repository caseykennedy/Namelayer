// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

const sectionHeight = 'calc(100vh - calc(var(--gutter) * 2))'

export const HomeView = styled.main`
  /* grid-column: 1/13; */
  width: 100%;
`

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--color-text);
  color: var(--color-bg);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .billboard {
    flex: 2;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > * {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: var(--gutter);
      width: 100%;

      &:first-child {
        border-bottom: var(--border);
      }
    }
  }

  .figure {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: var(--gutter);
    border-top: var(--border);
    width: 100%;

    @media ${breakpoint.tablet} {
      border-top: none;
      border-left: var(--border);
    }
  }
`

export const Introduction = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${sectionHeight};
  /* padding: var(--gutter) 0; */

  .sub {
    margin-bottom: var(--space-xl);
  }

  h1 {
    align-self: flex-end;
    /* font-size: 15vw; */
    text-align: right;
    padding-top: calc(var(--space-xxxxl) * 2);
  }

  .arrow {
    align-self: flex-end;
    height: var(--icon-size);
    width: var(--icon-size);
  }
`

export const Meta = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  .item {
    flex: 1;
    padding: var(--space-md);
    border: var(--border);
    border-radius: var(--radius-sm);

    &--built {
      border-color: var(--color-tertiary);
      color: var(--color-tertiary);
    }

    &--advised {
      border-color: var(--color-quaternary);
      color: var(--color-quaternary);
    }

    &--supported {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    .pill {
      display: inline-block;

      border: var(--border);
      border-radius: var(--radius-sm);
      margin-bottom: var(--space-md);
      padding: var(--space-xxxs) var(--space-lg);

      font-family: var(--font-mono);
      font-size: var(--text-sm);
      font-weight: 400;
      text-transform: uppercase;
    }
  }
`

// export default HomeView
