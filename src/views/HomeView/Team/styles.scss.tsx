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
    display: flex;
    flex-flow: row wrap;
    gap: var(--space-md);

    color: var(--color-secondary);

    & > * {
      flex: 1 1 300px;
      display: flex;
      flex-flow: column nowrap;

      padding: var(--gutter-sm);
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
