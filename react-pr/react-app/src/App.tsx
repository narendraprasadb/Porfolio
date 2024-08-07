import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/home-page' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
