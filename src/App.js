import React, { useState } from 'react'
import ApplicantPreview from './ApplicantPreview'
import Categories from './Categories'
import data from './data'

function App() {
  const [applicants, setApplicants] = useState(data)
  const [categories, setCategories] = useState([])

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>My Dashboard</h2>
          <div className='underline'></div>
        </div>

        <Categories />
        <ApplicantPreview />
      </section>
    </main>
  )
}

export default App
