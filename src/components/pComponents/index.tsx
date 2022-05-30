import {PStyled} from './styles'

 interface Props{
  size: string
  children: React.ReactNode
  color: string
  padding: string
  borderBottom: string
  font: string
  margin: string
  textAlign: string
}

const PComponents= ({size, children, color, padding, borderBottom, font, margin, textAlign}: Props) => {

  return (
    <PStyled
      size={size}
      color={color}
      padding={padding}
      borderBottom={borderBottom}
      font={font}
      margin={margin}
      textAlign={textAlign}>
      {children}
    </PStyled>
  )
}

PComponents.defaultProps={
  size: "5px",
  color: "#fff",
  padding: "0",
  borderBottom: "none",
  font: "arial",
  margin: "0",
  textAlign: "center"
  
}

export default PComponents