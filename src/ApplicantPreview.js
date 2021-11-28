import React, { useState, useEffect } from 'react'
import applications from './data'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ApplicantPreview = ({ applicants, setApplicants }) => {
  const [bookmarkToggle, setBookmarkToggle] = useState(false)
  const [bookmarkID, setBookmarkID] = useState(null)
  const [bookmarkedApplicants, setBookmarkedApplicants] = useState([])

  const toggleBookmark = (id) => {
    console.log('Toggle bookmark button was pressed.')
    console.log(id)
    setBookmarkToggle(!bookmarkToggle)

    setApplicants(
      applicants.map((applicant) => {
        if (applicant.id === id) {
          console.log(
            `Applicant with id of: ${id} was changed to ${!applicant.isFavorite}`
          )
          return { ...applicant, isFavorite: !applicant.isFavorite }
        }
        return applicant
      })
    )
  }
  // Save applicants to local storage everytime bookmarkID is set from toggleBookmark
  useEffect(() => {
    localStorage.setItem('applicants', JSON.stringify(applicants))
  }, [bookmarkToggle])

  return (
    <div className='section-center'>
      {applicants.map((applicant) => {
        const { id, name, position, image, description, isFavorite } = applicant
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
              <div className='more-and-bookmark'>
                <Link to={`/applicant/${id}`}>See More</Link>
                <button
                  className={`${
                    isFavorite ? 'bookmark-selected-btn' : 'bookmark-btn'
                  }`}
                  onClick={() => toggleBookmark(id)}
                >
                  <FaStar />
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ApplicantPreview
