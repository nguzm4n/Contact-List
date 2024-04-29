import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContextProvider';



const Form = () => {

  const { store, actions } = useContext(GlobalContext)
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

   

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        case 'fullName':
            setFullName(value);
            break;
        case 'email':
            setEmail(value);
            break;
        case 'phone':
            setPhone(value);
            break;
        case 'address':
            setAddress(value);
            break;
        default:
            break;
    }}

  

  return (
    <div className='container'>
      <div className='row' >
        <div className='col-md-12 d-flex justify-content-center'>
          <h1>Add New Contact</h1>
        </div>
      </div>
      <form onSubmit={(e) => actions.sendContact(e,{fullName, email, phone, address})}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Full Name" name="fullName" onChange={handleInputChange} value={fullName} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" name="email" onChange={handleInputChange} value={email} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Phone" name="phone" onChange={handleInputChange} value={phone} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Address" name="address" onChange={handleInputChange} value={address} aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save</button>
        <Link className="link" to='contacts'>or get back to contacts</Link>
      </form>
    </div>
  )
}

export default Form