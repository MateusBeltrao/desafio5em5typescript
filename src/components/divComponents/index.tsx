import React from 'react'
import { DivStyled } from './styles'

interface Props{
  backgroundColor: string
  width: string
  height: string
  children: React.ReactNode
  margin: string
  minHeight: string
  padding: string
  maxWidth: string
  flexDirection: string
  flexWrap: string
  alignContent: string
  alignItems: string
  justifyContent: string
  display: string
  borderRadius: string
  border: string
}

const DivComponents = ({backgroundColor, width, height, children, margin, minHeight, padding, maxWidth, flexDirection, flexWrap, alignContent, alignItems, justifyContent, display, borderRadius, border} : Props) => {
  return (
    <DivStyled 
      backgroundColor={backgroundColor} 
      width={width} 
      height={height} 
      margin={margin}
      minHeight={minHeight}
      padding={padding}
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      alignContent={alignContent}
      alignItem={alignItems}
      justufyContent={justifyContent}
      display={display}
      borderRadius={borderRadius}
      border={border}
      >{children }
    </DivStyled>
  )
}

DivComponents.defaultProps={
  minHeight: "0",
  backgroundColor: "none",
  margin: "0",
  width: "100%",
  height: "100vh",
  padding: "0",
  maxWidth: "auto",
  flexDirection: "column",
  flexWrap: "none",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  borderRadius: "0px",
  border: "none"
}

export default DivComponents