import React from 'react'
import { HStyles } from './styles'
interface Props{
    size: string
    children: React.ReactNode
    margin: string
    padding: string
    color: string
    textAlign: string
    paddingBottom: string
    borderBottom: string
    width: string
    font: string
}
    
const HComponents = ({size, children, margin, padding, color, textAlign, paddingBottom, borderBottom, width, font}: Props) => {
  return (
    <HStyles
        size={size}
        margin={margin}
        padding={padding}
        color={color}
        textAlign={textAlign}
        paddingBottom={paddingBottom}
        borderBottom={borderBottom}
        width={width}
        font={font}>
        {children}
    </HStyles>
  )
}

HComponents.defaultProps = {
  size: "20px",
  margin: "0",
  padding: "0",
  color: "#fff",
  textAlign: "center",
  paddingBottom: "0",
  borderBottom: "0",
  width: "100%",
  font: "arial"
}

export default HComponents