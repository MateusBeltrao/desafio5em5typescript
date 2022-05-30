import { InputStyled } from './styles'

interface Props{
  height: string
  backgroundColor: string
  children: React.ReactNode
  border: string
  type: string
  placeholder: string
  value: string
  onChange?: (e: any) => void;
  onKeyUp: (e: any) => void

}

const InputComponents = ({children, backgroundColor, height, border, type, placeholder, value, onChange, onKeyUp}: Props) => {
  return (
    <InputStyled
      backgroundColor={backgroundColor}
      height={height}
      border={border} 
      type={type}   
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    >
        {children}
    </InputStyled>
  )
}

InputComponents.defaultProps={
  height: "45px",
  backgroundColor: "transparent",
  border: "0px",
  type: "text",
  placeholder: "",
  onKeyUp:"Undefined"
}

export default InputComponents