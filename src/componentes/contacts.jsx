import React, { useContext, useEffect, useState } from 'react'
import '../styles/contacts.css'
import { Link, useNavigate } from 'react-router-dom';
import Contact from './contact';
import { GlobalContext } from '../context/GlobalContextProvider';


const Contacts = () => {



  const navigate = useNavigate()
  const { store, actions } = useContext(GlobalContext);

  useEffect(() => {

    actions.getContacts
  }, [store.contactos])

  useEffect(() => {
    if (store.contactID !== null) { navigate("/") }
  },)

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className=' d-flex justify-content-end contenedor-boton' >
          <Link type="button" className="btn btn-success" to="/">Add New Contact</Link>
        </div>
      </div>
      {store.contactos.map(contacto => (
        <Contact
          key={contacto.id}
          id={contacto.id}
          name={contacto.name}
          address={contacto.address}
          phone={contacto.phone}
          email={contacto.email}
          deleteContact={() => actions.deleteContact(contacto.id)}
          editContact={() => actions.editarContacto(contacto.id)}
        />
      ))}


   

    </>
  )
}

export default Contacts