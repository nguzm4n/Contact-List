import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './componentes/form'
import Contacts from './componentes/contacts'
import Notfound from './componentes/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'



function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
