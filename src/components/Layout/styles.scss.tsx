// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  width: 100%;

  @media ${breakpoint.sm} {
    flex-flow: row nowrap;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  @media ${breakpoint.sm} {
    max-width: calc(100vw - var(--header-width));
  }
`
