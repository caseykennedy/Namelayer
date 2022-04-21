// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

const sectionHeight = 'calc(100vh - calc(var(--gutter) * 2))'

export const HomeView = styled.main`
  /* grid-column: 1/13; */
  width: 100%;
`

export const SectionPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${sectionHeight};
  /* padding: var(--gutter) 0; */

  .section-display {
    display: flex;
    flex-flow: column nowrap;

    &__title {
      margin-bottom: var(--gutter);
    }

    &__message {
      display: flex;
      justify-content: flex-end;
      /* font-size: 15vw; */
      text-align: right;

      & > * {
        flex: 0.5;
      }
    }
  }

  .section-detail {
    display: flex;
    justify-content: flex-end;
    /* font-size: 15vw; */
    text-align: right;

    & > * {
      flex: 0.5;
    }
  }
`

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${sectionHeight};
  /* padding: var(--gutter) 0; */

  .sub {
  }

  h1 {
    align-self: flex-end;
    /* font-size: 15vw; */
    text-align: right;
    padding-top: calc(var(--space-xxxxl) * 2);
  }

  .arrow {
    align-self: flex-end;
    height: var(--icon-size);
    width: var(--icon-size);
  }
`

export const Introduction = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${sectionHeight};
  /* padding: var(--gutter) 0; */

  .sub {
    margin-bottom: var(--space-xl);
  }

  h1 {
    align-self: flex-end;
    /* font-size: 15vw; */
    text-align: right;
    padding-top: calc(var(--space-xxxxl) * 2);
  }

  .arrow {
    align-self: flex-end;
    height: var(--icon-size);
    width: var(--icon-size);
  }
`

// export default HomeView
