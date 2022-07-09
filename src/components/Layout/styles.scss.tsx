// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  width: 100%;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
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
  padding: var(--gutter) 0;
  /* max-height: 100%; */
  width: 100%;
`
