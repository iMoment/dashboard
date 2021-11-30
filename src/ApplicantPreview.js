import React, { useState, useEffect, useRef } from 'react'
import applications from './data'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Helper variables/functions
const getLocalStorage = () => {
  let applicants = localStorage.getItem('applicants')
  if (applicants) {
    return JSON.parse(localStorage.getItem('applicants'))
  } else {
    return applications
  }
}

// React Component Start
const ApplicantPreview = ({
  applicants,
  setApplicants,
  inBookmarksPage,
  setInBookmarksPage,
}) => {
  const [bookmarkPressed, setBookmarkPressed] = useState(false)
  const notInitialRender = useRef(false)

  const toggleBookmark = (id) => {
    console.log('Toggle bookmark button was pressed.')
    console.log(id)

    if (inBookmarksPage) {
      setApplicants(
        getLocalStorage().map((applicant) => {
          if (applicant.id === id) {
            return { ...applicant, isFavorite: !applicant.isFavorite }
          }
          return applicant
        })
      )
      setBookmarkPressed(!bookmarkPressed)
    } else {
      setApplicants(
        applicants.map((applicant) => {
          if (applicant.id === id) {
            return { ...applicant, isFavorite: !applicant.isFavorite }
          }
          return applicant
        })
      )
      setBookmarkPressed(!bookmarkPressed)
    }
  }
  // Save applicants to local storage everytime bookmarkToggle is set from toggleBookmark function
  useEffect(() => {
    if (notInitialRender.current) {
      localStorage.setItem('applicants', JSON.stringify(applicants))
    } else {
      notInitialRender.current = true
    }

    // localStorage.setItem('applicants', JSON.stringify(applicants))
    // notInitialRender.current = inBookmarksPage ? false : true

    // if (notInitialRender.current) {
    //   localStorage.setItem('applicants', JSON.stringify(applicants))
    // } else if (inBookmarksPage && !notInitialRender.current) {
    //   notInitialRender.current = true
    // } else {
    //   localStorage.setItem('applicants', JSON.stringify(applicants))
    // }
  }, [bookmarkPressed])

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
