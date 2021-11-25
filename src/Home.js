import React, { useState } from 'react'
import ApplicantPreview from './ApplicantPreview'
import applications from './data'

const Home = () => {
  const [applicants, setApplicants] = useState(applications)

  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>/ Dashboard /</h2>
          <div className='underline'></div>
        </div>

        <ApplicantPreview applications={applicants} />
      </section>
    </main>
  )
}

export default Home
