import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Capabilities = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  padding: var(--space-xl) 0;

  background: var(--color-text);
  color: var(--color-bg);

  /* .marquee {
    max-width: calc(100vw - var(--header-width));
  } */

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0;
    width: 100%;

    li {
      /* white-space: nowrap; */
      /* margin: 0 var(--space-xl); */
    }
  }
`

export default Capabilities
