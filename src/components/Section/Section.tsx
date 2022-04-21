// Section:
// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children?: React.ReactNode
  className?: string
  color?: string
  maxWidth?: string
  pt?: string
  pb?: string
  pr?: string
  pl?: string
  id?: string
  overflow?: string
}

const Section = ({
  bg,
  border,
  children,
  className,
  color,
  maxWidth,
  pt,
  pb,
  pr,
  pl,
  id,
  overflow,
}: Props) => (
  <S.Section
    id={id}
    className={className}
    bg={bg}
    border={border}
    color={color}
    pt={pt}
    pr={pr}
    pb={pb}
    pl={pl}
    maxWidth={maxWidth}
    overflow={overflow}
  >
    <div className="section__inner">{children}</div>
  </S.Section>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: theme.gutter,
  pb: theme.gutter,
  pr: theme.gutter,
  pl: theme.gutter,
}

Section.defaultProps = defaultProps
