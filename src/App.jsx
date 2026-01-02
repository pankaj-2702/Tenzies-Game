import { useState } from 'react'
import Main from '../Components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="container">
    <Main/>
    
   </div>
  )
}

export default App
