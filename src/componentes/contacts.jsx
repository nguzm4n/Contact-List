import React, { useContext } from 'react'
import '../styles/contacts.css'
import { Link } from 'react-router-dom';
import Contact from './contact';
import { GlobalContext } from '../context/GlobalContextProvider';


const Contacts = () => {

  const {store, actions} = useContext(GlobalContext)

  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className=' d-flex justify-content-end contenedor-boton' >
    <Link type="button" className="btn btn-success" to="/">Add New Contact</Link> 
    </div>
    </div>
      <Contact 
      name={store.name}
      address={store.address}
      phone={store.phone}
      email={store.email}
      />
    </>
  )
}

export default Contacts