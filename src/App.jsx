import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Booking from './pages/Booking'
import WorkerRegister from './pages/WorkerRegister'
import Services from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/trabajar" element={<WorkerRegister />} />
        
        <Route path="/servicios" element={<Services />} />

      </Routes>

    </BrowserRouter>
  )
}