// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const MobileNav = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: var(--color-bg);
  margin: 0;
  margin-top: var(--header-width);
  padding: var(--gutter);
  height: 100%;
  width: 100%;

  .secondary {
    border-top: var(--border);
    display: flex;
    flex-flow: column nowrap;
    margin-top: var(--space-sm);
    padding-top: var(--space-md);
    width: 100%;

    & > * {
      flex: 1;
      padding: var(--space-xs) 0;
      cursor: pointer;

      &:hover {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
`

export const NavLink = styled(motion.li)`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${breakpoint.sm} {
    padding: 0;
  }

  a {
    color: var(--color-text);
    font-size: var(--text-lg);
    text-decoration: none;
    width: 100%;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`
