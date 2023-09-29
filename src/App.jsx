import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterIndex from './routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom'

function App() {

 return(
  <>
  <BrowserRouter>
    <RouterIndex/>
  </BrowserRouter>
  </>
  
  
 )
}

export default App