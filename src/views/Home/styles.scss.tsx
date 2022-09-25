import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const HomeView = styled.main`
  position: relative;
  /* grid-column: 1/13; */
  width: 100%;

  .list-title {
    margin-top: var(--space-xxl);
  }

  .box__header {
    border-bottom: var(--border);
    height: var(--header-width);
  }
`

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 65vh;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .billboard {
    flex: 2;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;

    & > * {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: var(--gutter);
      width: 100%;
    }

    .wordmark {
      padding-top: var(--space-xxxxl);
    }

    .intro {
      h1 {
        margin-bottom: 0;
      }

      p {
        margin-bottom: var(--space-xxl);
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
      }
    }
  }
`
