import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import  Layout from '../src/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

/*const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {path:"",
       element:<Home/>},
      {path: 'about',
    element:<About/>}
    ]
  }
 
])*/


//* additional method to create router 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='Contact' element={<Contact/>}/>


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
