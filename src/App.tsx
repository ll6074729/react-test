import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import Robot from './components/Robot'
import robots from './mock/robots.json'
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
      {
        robots.map( r => <Robot id={r.id} name={r.name} email={r.email}> </Robot>)
      } 
   </div>
    </div>
    
  )
}

export default App
