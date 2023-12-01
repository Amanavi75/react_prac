import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const aman=()=>{
  counter = counter+1;
}
 

function App() {
  let counter = 5; 
   
  return (
    <>
      <h1> chai aur react </h1>
      <h3> Counter value: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br /> <br />
      <button>Remove value</button>
    </>
  )
}

export default App
