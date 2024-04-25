import React from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div className='container'>
            <div className='row' >
                <div className='col-md-12 d-flex justify-content-center'>
            <h1>Add New Contact</h1>
            </div>
            </div>
            <form className=''>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Full Name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Phone" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Address" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
                <Link className="link" to='contacts'>or get back to contacts</Link>
            </form>
        </div>
    )
}

export default Form