// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from "../../styles/mixins"

// ___________________________________________________________________

const sectionHeight = 'calc(100vh - calc(var(--gutter) * 2))'

export const HomeView = styled.main`
  /* grid-column: 1/13; */
  width: 100%;
`

export const Hero = styled.div`
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

export const ProjectMeta = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  }

  & > * {
    background-color: var(--color-text);
    border-radius: var(--radius);
    color: var(--color-bg);
    padding: var(--gutter);
  }
`

// export default HomeView
