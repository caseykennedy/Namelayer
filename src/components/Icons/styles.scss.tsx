// Icon Component Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const IconStyle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--icon-size);
  width: var(--icon-size);

  color: ${(p) => (p.color ? p.color : 'var(--color-text)')};

  svg {
    fill: ${(p) => (p.color ? p.color : 'var(--color-text)')};
    transition: ${theme.transition.all};
  }
`

export default IconStyle
