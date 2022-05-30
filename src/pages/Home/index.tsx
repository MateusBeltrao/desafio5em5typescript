
import DivComponents from '../../components/divComponents'

import HeaderHome from './header'
import BodyHome from './body'

const Home = () => {

  

  return (
      <DivComponents 
        backgroundColor="#391463" 
        display='' 
        width='100%' 
        height='100vh'
        >
            <HeaderHome></HeaderHome>
            <BodyHome></BodyHome>
      </DivComponents>
  )
}

export default Home