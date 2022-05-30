import { MainRouter } from './router';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <MainRouter/>
    </Router>
  );
}

export default App;
