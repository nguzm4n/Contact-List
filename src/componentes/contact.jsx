import React from 'react'
import imagenEjemplo from '../imagenes/images.png'
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import '../styles/contacts.css'



const Contact = ({ name, address, phone, email }) => {
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <div className="card mb-3 mt-5" style={{ minWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imagenEjemplo} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className='contenedor-icono d-flex justify-content-end'>
                <RiEditFill className='mt-2 me-2 fs-4' />
                <MdDelete className='mt-2 me-2 fs-4' />
              </div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5>{address}</h5>
                <h5>{phone}</h5>
                <h5>{email}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact