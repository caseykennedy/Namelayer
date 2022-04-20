// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--gutter);
  width: 100%;

  .twitter {
    svg {
      fill: var(--color-white);

      &:hover {
        fill: #1da1f2;
      }
    }
  }
`

export default Footer
