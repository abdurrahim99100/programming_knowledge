import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Carts from './component/Carts/Carts'
import Question from './component/Question/Question'
// react file;
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      {/* main section */}
      <div>
        <div>
          <Carts></Carts>
        </div>
        <div>
          <Question></Question>
        </div>
      </div>
    </div>
  )
}

export default App;
