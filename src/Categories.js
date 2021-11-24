import React, { useState } from 'react'
import data from './data'

const Categories = ({ setSortType }) => {
  const [idButton, setIDButton] = useState(true)
  const [nameButton, setNameButton] = useState(true)
  const [experienceButton, setExperienceButton] = useState(true)

  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => setSortType('id')}>
        {idButton ? 'Id(Asc)' : 'Id(Desc)'}
      </button>

      <button className='filter-btn' onClick={() => setSortType('name')}>
        {nameButton ? 'Name(Asc)' : 'Name(Desc)'}
      </button>

      <button className='filter-btn' onClick={() => setSortType('experience')}>
        {experienceButton ? 'Experience(Asc)' : 'Experience(Desc)'}
      </button>
    </div>
  )
}

export default Categories
