import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Main from './components/mainpage/Main'

function App() {
  return (
  <div className="App">
    <Main/>
    {<Outlet/>}
  </div>
  )
}

export default App
