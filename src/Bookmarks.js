import React, { useState } from 'react'
import applications from './data'
import { Link } from 'react-router-dom'

// React Components
import ApplicantPreview from './ApplicantPreview'

const Bookmarks = () => {
  const [bookmarkedApplicants, setBookmarkedApplicants] = useState(applications)

  return (
    <section className='dashboard section'>
      <div className='title'>
        <h2>/ Bookmarks</h2>
        <div className='underline'></div>
      </div>

      <ApplicantPreview applicants={bookmarkedApplicants} />
      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </section>
  )
}

export default Bookmarks
