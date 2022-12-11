import React from 'react'

export default function AddContact() {
    return (
      <div className="col-12 col-md-6 border-left-primary">
        <h3 className="display-3 text-center">AddContact</h3>
  
        <form>
  
          <div className="row mb-3">
            <label htmlFor="name" className="col-form-label col-12 col-sm-2">Name:</label>
            <input type="text" id="name" className="col-12 col-sm-9 offset-sm-1"/>
          </div>
  
          <div className="row mb-3">
            <label htmlFor="email" className="col-form-label col-12 col-sm-2">Email:</label>
            <input type="text" id="email" className="col-12 col-sm-9 offset-sm-1" />
          </div>
  
          <div className="row mb-3">
            <label htmlFor="phone" className="col-form-label col-12 col-sm-2">Phone:</label>
            <input type="text" id="phone" className="col-12 col-sm-9 offset-sm-1" />
          </div>

          <button className='btn btn-outline-warning text-primary'>Add Contact</button>
  
        </form>
      </div>
    )
  }