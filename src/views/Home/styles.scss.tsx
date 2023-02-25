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

  @media ${breakpoint.sm} {
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
      padding-top: calc(var(--space-xxxxl) * 2.75);
    }

    .intro {
      h1 {
        color: var(--color-text-muted);
        font-size: var(--text-base-size);
        margin-bottom: 0;

        @media ${breakpoint.sm} {
          font-size: var(--text-lg);
        }
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
    min-height: 375px;
    width: 100%;

    border-top: var(--border);
    position: relative;

    @media ${breakpoint.sm} {
      border-top: none;
      border-left: var(--border);
    }

    .torus {
      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      svg {
        transform: scale(1.25);
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
