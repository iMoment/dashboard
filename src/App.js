import React, { useState, useEffect } from 'react'
import ApplicantPreview from './ApplicantPreview'
import Categories from './Categories'
import data from './data'

function App() {
  const [applicants, setApplicants] = useState(data)
  const [sortType, setSortType] = useState('id')

  useEffect(() => {
    const sortApplicants = (type) => {
      const types = {
        id: 'id',
        name: 'name',
        experience: 'experience',
      }
      const sortProperty = types[type]
      const sortedApplicants = [...applicants].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      )
      setApplicants(sortedApplicants)
    }
    sortApplicants(sortType)
  }, [sortType])

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>My Dashboard</h2>
          <div className='underline'></div>
        </div>

        <Categories setSortType={setSortType} />
        <ApplicantPreview data={applicants} />
      </section>
    </main>
  )
}

export default App
