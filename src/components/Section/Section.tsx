// Section:
// ___________________________________________________________________

import * as React from 'react'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children?: React.ReactNode
  className?: string
  color?: string
  maxWidth?: number | number[] | string | string[]
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  overflow?: string
}

type RowProps = {
  children: React.ReactChild
}

// export const Row = ({ children }: RowProps) => (
//   <Box
//     sx={{
//       pb: [6, 7, 7],
//       '&:last-child': {
//         pb: 0,
//       },
//     }}
//   >
//     {children}
//   </Box>
// )

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
  <section
    id={id}
    className={className}
    style={{ paddingTop: theme.gutter }}
    // sx={{
    //   bg,
    //   color,
    //   pt,
    //   pb,
    //   borderTop: border ? theme.border : 'none',
    //   overflow: overflow || 'visible',
    //   position: 'relative',
    //   width: '100%',
    // }}
  >
    <div
    // sx={{
    //   boxSizing: 'content-box',
    //   maxWidth: maxWidth || theme.maxWidth,
    //   mx: 'auto',
    //   pr,
    //   pl,
    // }}
    >
      {children}
    </div>
  </section>
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