import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 let myObj = {
  username:"aman avi"
 }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-6'> Started with props </h1>
      <Card username="aman"/>
      <Card username={"aditya"}/>
      
      
      
    </>
  )
}

export default App
