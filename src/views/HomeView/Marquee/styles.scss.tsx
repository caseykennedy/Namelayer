import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Marquee = styled.div`
  display: flex;
  flex-flow: row nowrap;

  overflow: hidden;
  padding: var(--space-xl) 0;

  background: var(--color-text);
  color: var(--color-bg);

  /* position: sticky;
  top: 0;
  z-index: 999; */

  .marquee-container {
    @media ${breakpoint.tablet} {
      max-width: calc(100vw - calc(var(--header-width) + 16px));
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0;
    width: 100%;

    li {
      white-space: nowrap;
      margin: 0 var(--space-xl);

      @media ${breakpoint.tablet} {
        margin: 0 var(--space-xxxxl);
      }
    }
  }
`

export default Marquee
