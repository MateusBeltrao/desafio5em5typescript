import { CheckboxInput} from "./style"

interface Props{
    checked: boolean
    type: string
    onChange?: (e: any) => void;
  }


const Checkbox = ({checked, type, onChange}: Props) => {
  return (
          <CheckboxInput
              checked={checked}
              type={type}
              onChange={onChange}
          >
          </CheckboxInput>
  )
}

Checkbox.defaultProps={
  type: "checkbox"
}

export default Checkbox