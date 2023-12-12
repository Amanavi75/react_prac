import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




 

function App() {

  const [counter,setCounter]=useState(15)
  // basically used to  propaagate the change to the user interfaces 
   

  const addValue=()=>{
      console.log("clicked",counter);
      setCounter(counter+1)

  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1> chai aur react </h1>
      <h3> Counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
