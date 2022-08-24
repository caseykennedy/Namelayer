import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const HomeView = styled.main`
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
  border-bottom: var(--border);

  height: 65vh;

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
      padding-top: var(--space-xxxl);
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

export const Capabilities = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .title {
    margin-bottom: 0;
  }

  & > * {
    /* flex: 1; */

    &:not(:first-child) {
    }
  }
`

export const Meta = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;

  p span {
    color: var(--color-text-muted);
  }

  .row {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--space-xxxl);

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    &:first-child {
      margin-bottom: var(--space-xxxl);
    }

    .item {
      flex: 1;
      /* padding: var(--space-lg); */
      /* border: var(--border); */
      border-radius: var(--radius);

      /* &--built {
      border-color: var(--color-tertiary);
      color: var(--color-tertiary);
    }

    &--advised {
      border-color: var(--color-quaternary);
      color: var(--color-quaternary);
    }

    &--supported {
      border-color: var(--color-primary);
      color: var(--color-primary);
    } */

      span {
        display: inline-block;
        /* font-family: var(--font-mono); */
        /* line-height: 2.25; */
        text-transform: uppercase;
        margin-bottom: var(--space-xl);
      }
    }
  }
`

export const Intro = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${breakpoint.tablet} {
    flex-flow: row-reverse nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .box {
    border: var(--border);
    border-radius: var(--radius);
    height: 600px;
    width: 100%;
  }
`

export const Features = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    flex: 1;
    padding: var(--gutter);
  }

  .feature-detail {
    position: relative;

    &__sticky {
      position: sticky;
      top: var(--gutter);
    }
  }

  .feature-list {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gutter);

    .feature {
      flex: 1 1 200px;
      display: flex;
      flex-flow: column nowrap;

      border: var(--border);
      border-radius: var(--radius);
      font-size: var(--text-root-size);
      padding: var(--gutter);

      &__title {
        margin-bottom: var(--space-md);
      }

      &__desc {
      }
    }
  }
`

export const Team = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--gutter);
    margin-top: var(--gutter);

    & > * {
      padding: var(--gutter);
      background: var(--color-black);
      border: var(--border);
      border-radius: var(--radius);

      /* &:not(:first-child) {
      border-left: var(--border);
      padding-left: var(--gutter);
    } */
    }
  }
`
