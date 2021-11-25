import React from 'react'

const ApplicantPreview = ({ applications }) => {
  return (
    <div className='section-center'>
      {applications.map((application) => {
        const { id, name, position, image, description } = application
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
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ApplicantPreview
