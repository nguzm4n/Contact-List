import React from 'react'
import '../styles/contacts.css'
import { Link } from 'react-router-dom';
import Contact from './contact';


const Contacts = () => {

  

  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className=' d-flex justify-content-end contenedor-boton' >
    <Link type="button" className="btn btn-success" to="/">Add New Contact</Link> 
    </div>
    </div>
      <Contact />
    </>
  )
}

export default Contacts