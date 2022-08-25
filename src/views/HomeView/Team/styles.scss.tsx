import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Team = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--gutter);
  border-top: var(--border);

  .row {
    margin-bottom: var(--space-xxxl);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: var(--space-md);

    color: var(--color-secondary);

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

export default Team
