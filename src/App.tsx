import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path={'/'} element={<HomeScreen />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
