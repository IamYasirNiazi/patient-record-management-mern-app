import React from 'react'
import AddRecord from './AddRecord'
import SearchRecord from './SearchRecord'
import AllHistory from './AllHistory'

function AllButtons() {
  return (
    <>
    <div className='container'>
      <div className='row d-flex align-items-center justify-content-center'>
        <div className="col col-12 col-md-3" style={{padding: '.6rem'}}>
          <AddRecord />
        </div>
        <div className="col col-12 col-md-6" style={{padding: '.6rem'}}>
          <SearchRecord />
        </div>
        <div className="col col-12 col-md-3" style={{padding: '.6rem'}}>
          <AllHistory />
        </div>
      </div>
    </div>
    </>
  )
}

export default AllButtons