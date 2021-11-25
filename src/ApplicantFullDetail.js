import React from 'react'

const ApplicantFullDetail = ({ applicant }) => {
  // Need to add availability/questions
  const { id, name, position, image, applied, experience, description } =
    applicant

  return (
    <article className='single-applicant'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
      </div>
      <h4 className='author'>{name}</h4>
      <p className='position'>{position}</p>
      <p className='applied'>{applied}</p>
      <p className='experience'>{experience} years</p>
      <p className='info'>{description}</p>
    </article>
  )
}

export default ApplicantFullDetail
