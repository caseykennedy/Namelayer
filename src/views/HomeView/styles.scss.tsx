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

  h5 {
    color: var(--color-primary);
  }
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
    align-items: center;
    justify-content: center;

    padding: var(--gutter);
    width: 100%;

    border-top: var(--border);
    position: relative;

    @media ${breakpoint.tablet} {
      border-top: none;
      border-left: var(--border);
    }

    .rings {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      svg {
        max-height: 425px;
      }
    }

    .handshake {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      svg {
        width: 64px;

        path {
          fill: var(--color-bg);
        }
      }
    }
  }
`

export const Intro = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-xxl);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);

    &:not(:first-child) {
      border-left: var(--border);
      padding-left: var(--gutter);
    }
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

export const Features = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-xxl);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);

    &:not(:first-child) {
      border-left: var(--border);
    }
  }

  .lead {
    color: var(--color-text-muted);
  }

  .title {
    margin-top: var(--space-xl);
  }
`
