import React from 'react'

const ApplicantPreview = ({ data }) => {
  return (
    <div className='section-center'>
      {data.map((applicant) => {
        const { id, name, position, image } = applicant

        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4 className='price'>{name}</h4>
              <p className='item-text'>{position}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ApplicantPreview
