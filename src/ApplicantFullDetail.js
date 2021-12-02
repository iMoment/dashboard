import React, { useState, useEffect } from 'react'
import applications from './data'
import { Link, useParams } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

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
    <section className='section'>
      <div className='img-container'>
        <img
          src={applicant.image}
          alt={applicant.name}
          className='person-img'
        />
      </div>

      <div className='jobs-center'>
        <div className='applicant-id-container'>
          <h3>Applicant ID: {applicant.id}</h3>
        </div>
      </div>

      {/* Full Info */}
      <article className='applicant-full-info'>
        <h3>{applicant.name}</h3>
        <h4>{applicant.position}</h4>
        <p>Application Date: {applicant.applied}</p>
        <p>Experience: {applicant.experience} years</p>

        {/* Description */}
        <div className='applicant-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p>{applicant.description}</p>
        </div>

        {/* Availability */}
        <div className='applicant-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p className='availability-schedule'>
            Availability:{' '}
            {Object.keys(applicant.availability).map((keyName, index) => {
              return (
                <p>
                  {daysDictionary[keyName]}:{' '}
                  {availability[applicant.availability[keyName]]}
                </p>
              )
            })}
          </p>
        </div>

        {/* Questions */}
        <div className='applicant-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p className='availability-schedule'>
            [Questions]:{' '}
            {applicant.questions.map((question) => {
              return (
                <div>
                  <p>{question.text}</p>
                  <p>{question.answer}</p>
                </div>
              )
            })}
          </p>
        </div>
      </article>

      <div className='back-btn-container'>
        <Link to='/' className='btn'>
          Back to Dashboard
        </Link>
      </div>
    </section>
  )
}

export default ApplicantFullDetail
