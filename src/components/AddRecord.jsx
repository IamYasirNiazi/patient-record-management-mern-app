import React from 'react'

function AddRecord() {

  function addRecordFunc(event){
    event.preventDefault();
  }  

return (
  <>
    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-sm btn-secondary' type='button' style={{padding: '.5rem .5rem', width: '100%'}}>Add Record</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Patient Record</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='d-flex flex-column gap-2'>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <label htmlFor="">Patient Name</label>
            <input type="text" style={{width: '100%'}} />
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <label htmlFor="">CNIC</label>
            <input type="text" style={{width: '100%'}} />
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <label htmlFor="">Address</label>
            <input type="text" style={{width: '100%'}} />
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <label htmlFor="">Disease</label>
            <input type="text" style={{width: '100%'}} />
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start'>
            <label htmlFor="">Contact No#</label>
            <input type="text" style={{width: '100%'}} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
  </>
  
  )
}

export default AddRecord