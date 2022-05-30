import React from 'react'
import { ButtonStyled } from './styles'

interface Props{
    backgroundColor: string
    children: React.ReactNode
    width: string
    height: string
    onClick: () => void
}

const BunttonComponents = ({backgroundColor, height, children, width, onClick}: Props) => {
  return (
    <ButtonStyled
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        onClick={onClick}>
        {children}
    </ButtonStyled >
  )
}

BunttonComponents.defaultProps={
  backgroundColor: "#358600",
  width: "100px",
  height: "45px"
}

export default BunttonComponents