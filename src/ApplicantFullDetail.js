import React, { useState, useEffect } from 'react'
import applications from './data'
import { Link, useParams } from 'react-router-dom'

const ApplicantFullDetail = () => {
  const [applicant, setApplicant] = useState('Default Name')
  console.log(useParams())
  const { id } = useParams()

  useEffect(() => {
    const newApplicant = applications.find(
      (applicant) => applicant.id === parseInt(id)
    )
    setApplicant(newApplicant)
  }, [])
  return (
    <div>
      <article className='single-applicant'>
        <div className='img-container'>
          <img
            src={applicant.image}
            alt={applicant.name}
            className='person-img'
          />
        </div>
        <h4 className='author'>{applicant.name}</h4>
        <p className='position'>{applicant.position}</p>
        <p className='applied'>{applicant.applied}</p>
        <p className='experience'>{applicant.experience} years</p>
        <p className='info'>{applicant.description}</p>
      </article>

      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </div>
  )
}

export default ApplicantFullDetail
