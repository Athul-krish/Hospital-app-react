import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddPatient from './components/AddPatient'
import SearchPatient from './components/SearchPatient'
import DischargePatient from './components/DischargePatient'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddPatient/>}/>
    <Route path='/add' element={<AddPatient/>}/>
    <Route path='/search' element={<SearchPatient/>}/>
    <Route path='/discharge' element={<DischargePatient/>}/>
    <Route path='/view' element={<ViewAll/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
