import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col col-ss-4'>
        <input className='form-control' placeholder='Search'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value) }></input>
      
    </div>
  )
}

export default SearchBox
