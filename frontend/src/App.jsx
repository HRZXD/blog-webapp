import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/main/HomePage'
import Footer from './components/footer/Footer'
import BlogPage from './components/blogs/BlogPage'
import LoginPage from './components/login/LoginPage'
import AdminPage from './components/admin/AdminPage'

function App() {
  return (
  <div>
    {/* <Navbar/>
    <HomePage/>
    <BlogPage/>
    <Footer/> */}
    <LoginPage/>
  </div>
  )
}

export default App
