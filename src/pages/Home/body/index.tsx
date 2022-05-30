import DivComponents from '../../../components/divComponents'
import HComponents from '../../../components/hComponents'
import PComponents from '../../../components/pComponents'
import BunttonComponents from '../../../components/buttonComponents'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { Item2 } from '../../../components/listComponents/item'



const BodyHome = () => {

    const [list, setList] = useState<Item2[]>([
        {id: 1, top: "Desafio 1",description: "Lista de Tarefas", link: "/tarefa"},
        {id: 2, top: "Desafio 2",description: "Sistema de Finanças Pessoais", link: "/financas"},
        {id: 3, top: "Desafio 3",description: "Galeria de Fotos (Firebase)", link: "/galeria"},
        {id: 4, top: "Desafio 4",description: "Jogo RPG", link: "/jogo"},
        {id: 5, top: "Desafio 5",description: "Formulário multi-etapas", link: "/formulario"},
      ]);

    const navigate = useNavigate()

  return (
      
            <DivComponents  
            width="100%" 
            height="90vh"
            flexWrap='wrap'
            alignContent='center'
            >
                {list.map((item, index)=>(
                    <DivComponents 
                        width='350px'
                        height='250px'
                        margin='10px'
                        backgroundColor='#DB4C40'
                    >
                            <HComponents size='10px' padding='20px'>{item.top}</HComponents>
                            <PComponents font='monospace' margin='15px'>{item.description}</PComponents>
                            <BunttonComponents onClick={()=> navigate(item.link)} >
                            <PComponents margin='15px'>VER</PComponents>
                        </BunttonComponents>
                    </DivComponents>
                ))}
            
                


            </DivComponents>
  )
}

export default BodyHome