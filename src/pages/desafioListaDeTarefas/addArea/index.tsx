import { useState, KeyboardEvent } from 'react'
import DivComponents from '../../../components/divComponents'
import InputComponents from '../../../components/inputComponents'
import PComponents from '../../../components/pComponents'

type Props = {
  onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {

  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === "Enter" && inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  }


  return (
    <DivComponents
      backgroundColor='#20212c'
      margin='0 auto 10px auto' 
      height='auto' 
      display='flex'
      justifyContent='flex-start'
      flexDirection='row' 
      width="80%" 
      alignContent='center'
      borderRadius="20px"
      border='1px solid #555'
    
  >
    <PComponents margin='12px'> + </PComponents>
    <InputComponents
      value={inputText}
      type='text'
      placeholder="Adicione uma tarefa "
      onChange={event => setInputText(event.target.value)}
      onKeyUp={handleKeyUp}
    >
    </InputComponents>
    
  </DivComponents>
  )
}

export default AddArea