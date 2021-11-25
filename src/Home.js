import React from 'react'
import ApplicantPreview from './ApplicantPreview'

const Home = () => {
  return (
    <main>
      <section className='dashboard section'>
        <div className='title'>
          <h2>/ Dashboard</h2>
          <div className='underline'></div>
        </div>

        <ApplicantPreview />
      </section>
    </main>
  )
}

export default Home
