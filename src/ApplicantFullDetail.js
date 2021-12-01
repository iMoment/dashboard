import React, { useState, useEffect } from 'react'
import applications from './data'
import { Link, useParams } from 'react-router-dom'

// Helper variables/functions
const daysDictionary = {
  M: 'Monday',
  T: 'Tuesday',
  W: 'Wednesday',
  Th: 'Thursday',
  F: 'Friday',
  S: 'Saturday',
  Su: 'Sunday',
}

const availability = {
  0: 'Morning',
  1: 'Afternoon',
  2: 'Evening',
}

// React Component Start
const ApplicantFullDetail = () => {
  const [applicant, setApplicant] = useState(applications[0])
  const { id } = useParams()

  useEffect(() => {
    const newApplicant = applications.find(
      (applicant) => applicant.id === parseInt(id)
    )
    setApplicant(newApplicant)
  }, [])

  return (
    <article className='review'>
      <div className='img-container'>
        <img
          src={applicant.image}
          alt={applicant.name}
          className='person-img'
        />
      </div>
      <h4 className='author'>Applicant ID: {applicant.id}</h4>
      <h4 className='author'>{applicant.name}</h4>
      <p className='job'>Applied position: {applicant.position}</p>
      <p className='applied'>Application date: {applicant.applied}</p>
      <p className='experience'>Experience: {applicant.experience} years</p>
      <p className='info'>Description: {applicant.description}</p>
      <p className='availability'>Availability: </p>

      <div>
        {Object.keys(applicant.availability).map((keyName, index) => {
          return (
            <p>
              {daysDictionary[keyName]}:{' '}
              {availability[applicant.availability[keyName]]}
            </p>
          )
        })}
      </div>

      <div></div>

      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </article>
  )
}

export default ApplicantFullDetail
