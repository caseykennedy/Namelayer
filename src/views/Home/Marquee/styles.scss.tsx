import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Marquee = styled.div`
  display: flex;
  flex-flow: row nowrap;

  overflow: hidden;
  padding: var(--space-xl) 0;

  background: var(--color-bg);
  /* background: linear-gradient(
    0deg,
    var(--color-bg-secondary) 0%,
    rgba(0, 0, 0, 0) 33%
  ); */
  border-top: var(--border);
  border-bottom: var(--border);
  color: var(--color-text-muted);
  font-weight: 600;

  /* position: sticky;
  top: 0;
  z-index: 999; */

  .marquee-container {
    @media ${breakpoint.sm} {
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

      @media ${breakpoint.sm} {
        margin: 0 var(--space-xxxxl);
      }
    }
  }
`

export default Marquee
