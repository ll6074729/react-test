import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
// import './App.css'
import Robot from './components/Robot'
import robots from './mock/robots.json'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

interface Props{

}
interface State {
  robotGallery: any[]
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => this.setState({robotGallery: data}))
  }

  render(): React.ReactNode {
      return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo}></img>
        <h1>罗伯特机器人吊炸天</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
      {
        this.state.robotGallery.map( (r, i) => <Robot id={r.id} name={r.name} email={r.email} key={i}> </Robot>)
      } 
   </div>
    </div>
    
  )
  }
  
}

export default App
