import { useState } from "react"
import { Item } from '../../../components/listComponents/item';
import ListItem from "../listItem";
import AddArea from "../addArea";

const BodyListaDeTarefa = () => {

    const [list, setList] = useState<Item[]>([
        {id: 1, name: "Comprar o paõ na padaria", done: true},
        {id: 2, name: "Comprar um bolo na padaria", done: false},
      ]);  

    const handleAddTask = (taskName: string) => {
      let newList = [...list]
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      })
      setList(newList)
    }

    const handleTaskChange = (id: number, done: boolean) => {
      let newList = [...list]
      for(let i in newList) {
        if(newList[i].id === id) {
          newList[i].done = done
        }
      }
      setList(newList)
    }

  return (
      <>
        <AddArea onEnter={handleAddTask}></AddArea>
        {list.map((item, index)=>(
           <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          ></ListItem>
        ))}
      </>
  )
}

export default BodyListaDeTarefa