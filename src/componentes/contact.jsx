import React from 'react'
import imagenEjemplo from '../imagenes/images.png'
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../styles/contact.css'



const Contact = ({ name, address, phone, email , editContact, deleteContact }) => {
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <div className="card mb-3 mt-5" style={{ minWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imagenEjemplo} className="img-fluid rounded-start p-picture" alt="..." />
            </div>
            <div className="col-md-8">
              <div className='contenedor-icono d-flex justify-content-end'>
                <RiEditFill onClick={editContact} className='mt-2 me-2 fs-4' />
                <MdDelete onClick={deleteContact} className='mt-2 me-2 fs-4' />
              </div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5><FaLocationDot /> {address}</h5>
                <h5><FaPhoneFlip /> {phone}</h5>
                <h5><MdEmail /> {email}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact