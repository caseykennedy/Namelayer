// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  .scroll-container {
    position: fixed;
    top: 0;
    left: var(--header-width);
    overflow: hidden;
    will-change: transform;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;

  /* display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
  gap: var(--gutter); */

  margin-left: auto;
  /* max-height: 100%; */
  width: 100%;
`
