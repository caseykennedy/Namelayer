// Button:
// ___________________________________________________________________

import * as React from 'react'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  to: string
}

const Button = ({ children, to }: Props) => (
  <S.Button href={to} target="_blank" rel="noopener">
    {children}
  </S.Button>
)

export default Button
