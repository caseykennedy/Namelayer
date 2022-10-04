import styled from 'styled-components'
import { breakpoint, textCrop } from '../../../styles/mixins'

// ___________________________________________________________________

export const Team = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--gutter);
  border-top: var(--border);

  .row {
    margin-bottom: var(--space-xxxl);
  }

  .team-list {
    display: flex;
    flex-flow: column wrap;

    .mate {
      flex: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      border-top: var(--border);
      font-size: var(--text-root-size);
      padding: var(--gutter-sm) 0;

      &__quarter {
        padding-right: var(--gutter-sm);
      }

      &__name {
        ${textCrop(1, 0, -0.05)}

        flex: 1;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        font-size: var(--text-md);
        font-weight: 600;

        .emoji {
          background: var(--color-text);
          border: var(--border);
          border-radius: var(--radius-lg);
          margin-right: var(--gutter-sm);
          padding: var(--space-md);
        }
      }

      &__desc {
      }

      &__position {
        padding-left: var(--gutter);
      }
    }
  }
`

export default Team
