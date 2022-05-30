import React from 'react'
import { HeaderStyles } from './styles'

interface Props{
  width: string
  height: string
  background: string
  padding: string
  children: React.ReactNode
}

const Header = ({children, width, height, background, padding}: Props) => {
  return (
    <HeaderStyles
      width={width}
      height={height}
      background={background}
      padding={padding}>
      {children}  
    </HeaderStyles>   
  )
}

Header.defaultProps={
  width: "100%",
  height: "7%",
  padding: "0",
  background: "#fff"
}

export default Header