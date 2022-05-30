import { LabelStyles } from "./styles"

interface Props{
    children: React.ReactNode
    done: boolean
}

const LabelComponents = ({children, done}:Props) => {

    

  return (
    <LabelStyles done={done}>{children}</LabelStyles>
  )
}


export default LabelComponents