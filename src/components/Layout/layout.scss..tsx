// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  flex: 1;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
  gap: var(--gutter);

  margin-left: auto;
  padding: 0 var(--gutter);
  max-height: 100%;
  width: 100%;
`
