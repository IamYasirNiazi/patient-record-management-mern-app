import React from 'react'

function SearchRecord() {

  function searchRecordFunc(event){
    event.preventDefault();
  } 

  return (
    <div>
      <form onSubmit={searchRecordFunc}>
        <div style={{border: '1px solid #222', borderRadius: '8px', display: 'flex', width: '100%'}}>
          <input type="text" id='search' style={{border: 'none', backgroundColor: 'none', padding: '.5rem .5rem', outline: 'none', width: '100%'}} required/>
          <button className='btn btn-success'>Search</button>
        </div>
      </form>

    </div>
  )
}

export default SearchRecord