import DivComponents from "../../components/divComponents"
import BodyListaDeTarefa from "./body";
import HeaderListaDeTarefa from "./header";

const ListaDeTarefa = () => {
  
  return (
    <DivComponents 
        backgroundColor="#17181f" 
        display="" width="100%"
        height="100vh"       
    >
              <HeaderListaDeTarefa></HeaderListaDeTarefa>             
              <BodyListaDeTarefa></BodyListaDeTarefa> 
    </DivComponents>
  )
}

export default ListaDeTarefa