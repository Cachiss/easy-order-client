import { useState } from 'react'
import { AuthProvider } from './context/Authprovider'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginRestaurant from './pages/restaurants/login'
import RegisterRestaurant from './pages/restaurants/register'
import LoginAdmin from './pages/admins/login'
import RegisterUser from './pages/users/register'
import LoginUser from './pages/users/login'
import IndexRestaurant from './pages/restaurants'
import Footer from './components/footer/footer'
import NavbarComponent from './components/navbar';
function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/restaurant/login' element={<LoginRestaurant />} />
        <Route path='/restaurant/register' element={<RegisterRestaurant />} />
        <Route path='/user/login' element={<LoginUser />} />
        <Route path='/user/register' element={<RegisterUser />} />
        <Route path='/admin/login' element={<LoginAdmin />} />
        {/* Dynamic page restaurant*/}
        <Route path='/restaurant/:name' element={<IndexRestaurant/>} />
      </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
