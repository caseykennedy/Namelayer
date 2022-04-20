// Icon Component Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const IconStyle = styled.span`
  font-size: 1rem;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${(p) => (p.color ? p.color : 'var(--color-text)')};

  svg {
    fill: ${(p) => (p.color ? p.color : 'var(--color-text)')};
    transition: ${theme.transition.all};
  }
`

export default IconStyle
