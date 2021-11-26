import React, { useState, useEffect } from 'react'
import SortFilter from './SortFilter'
import ApplicantPreview from './ApplicantPreview'

const Home = () => {
  const [name, setName] = useState('')

  const handleFilter = (e) => {
    e.preventDefault()
    console.log('This is a test.')
  }

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>/ Dashboard</h2>
          <div className='underline'></div>
        </div>
        <SortFilter />

        <ApplicantPreview />
      </section>
    </main>
  )
}

export default Home
