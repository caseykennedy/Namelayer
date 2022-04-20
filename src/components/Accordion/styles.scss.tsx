// Accordion Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const AccordionContainer = styled.div`
  border: ${theme.border};
  border-radius: ${theme.radius};
  margin-bottom: ${theme.space[3]};
  position: relative;
  width: 100%;
`

export const AccordionInner = styled.div<{bg?: string}>`
  /* background: ${p => p.bg}; */
  display: flex;
  flex-direction: column;
`

export const AccordionToggle = styled.div<{ bg?: string, colorActive?: string, color?: string}>`
display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.color};
  cursor: pointer;

  outline: none;
  transition: background-color ${theme.transition.global};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${theme.colors.highlight};
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: ${theme.transition.all};

  .content {
    flex-wrap: wrap;
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
  }
`

export const Carat = styled.div<{ caratColor?: string, caratWidth?: string }>`
  display: none;
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    display: flex;
    align-items: center;
  }

  &.rotate {
    transform-origin: center;
    transform: rotate(90deg);
  }

  svg {
    fill: ${p => p.caratColor};
    width: ${p => p.caratWidth ? p.caratWidth : theme.space[3]};
  }
`
