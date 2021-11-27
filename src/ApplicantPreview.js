import React, { useState } from 'react'
import applications from './data'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ApplicantPreview = ({ applicants }) => {
  // const [applicants, setApplicants] = useState(applications)

  return (
    <div className='section-center'>
      {applicants.map((applicant) => {
        const { id, name, position, image, description } = applicant
        return (
          <article key={id} className='applicant'>
            <img src={image} alt={name} className='photo' />
            <div className='applicant-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='position'>{position}</h4>
              </header>
              <p className='applicant-text'>{`${description.substring(
                0,
                200
              )}...`}</p>
              <Link to={`/applicant/${id}`}>See More</Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ApplicantPreview
