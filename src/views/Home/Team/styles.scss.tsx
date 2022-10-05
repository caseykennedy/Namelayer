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

      &:last-child {
        padding-bottom: 0;
      }

      &__name {
        ${textCrop(1, 0, -0.05)}

        flex: 1;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        font-size: var(--text-md);
        font-weight: 600;

        @media ${breakpoint.tablet} {
          font-size: var(--text-md);
        }

        .emoji {
          background: var(--color-bg-secondary);
          border: var(--border);
          border-radius: var(--radius-lg);
          font-size: var(--text-base-size);
          margin-right: var(--gutter-sm);
          padding: var(--space-sm);

          @media ${breakpoint.tablet} {
            font-size: var(--text-md);
          }
        }
      }

      &__quote {
        display: none;

        @media ${breakpoint.tablet} {
          display: initial;
        }
      }

      &__position {
        color: var(--color-text-muted);
        text-align: right;
        width: 100px;
        padding-left: var(--gutter);
      }
    }
  }
`

export default Team
