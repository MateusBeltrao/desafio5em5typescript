import DivComponents from "../../../components/divComponents"
import PComponents from "../../../components/pComponents"
import { Item } from "../../../components/listComponents/item"
import LabelComponents from "../../../components/labelComponents"
import { useState } from "react"
import Checkbox from "../../../components/checkBoxComponents"

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

const ListItem = ({item, onChange}: Props) => {

  const [isChecken, setIsChecken] = useState(item.done)

  return (
    <DivComponents 
              backgroundColor='#20212c' 
              margin='0 auto 10px auto' 

              height='auto' 
              display='flex'
              justifyContent='flex-start'
              flexDirection='row'
              width="80%" 
              borderRadius="20px"
            >
                <Checkbox checked={item.done}  onChange={event => onChange(item.id, event.target.checked)}></Checkbox>
                <LabelComponents  done={item.done}>
                  <PComponents 
                    margin='-20px 0 0 0'
                    color='#fff'
                  >
                      {item.name}
                  </PComponents>
                </LabelComponents>
           </DivComponents>
  )
}

export default ListItem