import React from 'react'

const handleFilter = (e) => {
  e.preventDefault()
  console.log('Filter button was pressed')
}

const SortFilter = () => {
  return (
    <div className='btn-container'>
      <button type='button' className='sort-btn'>
        All
      </button>
      <button type='button' className='sort-btn'>
        Name
      </button>
      <button type='button' className='sort-btn'>
        ID
      </button>

      <form className='grocery-form' onSubmit={handleFilter}>
        <div className='form-control'>
          <input type='text' />
          <button type='submit' className='filter-btn'>
            Filter
          </button>
        </div>
      </form>
    </div>
  )
}

export default SortFilter
