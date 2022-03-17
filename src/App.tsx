import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Robot from './components/Robot'
import robots from './mock/robots.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ul>
      {
        robots.map( r => <Robot id={r.id} name={r.name} email={r.email}> </Robot>)
      } 
   </ul>
  )
}

export default App
