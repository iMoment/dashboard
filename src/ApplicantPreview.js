import React, { useState, useEffect, useRef } from 'react'
import applications from './data'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Helper variables/functions
const constants = {
  APPLICANT: 'applicants',
  BOOKMARKED_APPLICANTS: 'bookmarkedApplicants',
}

const getLocalStorage = () => {
  let applicants = localStorage.getItem(constants.APPLICANT)
  if (applicants) {
    return JSON.parse(localStorage.getItem(constants.APPLICANT))
  } else {
    return applications
  }
}

// React Component Start
const ApplicantPreview = ({
  applicants,
  bookmarkedApplicants,
  setApplicants,
  inBookmarksPage,
}) => {
  const [bookmarkPressed, setBookmarkPressed] = useState(false)
  const notInitialRender = useRef(false)

  // MARK - Bookmark function
  const toggleBookmark = (id) => {
    setApplicants(
      getLocalStorage().map((applicant) => {
        if (applicant.id === id) {
          return { ...applicant, isFavorite: !applicant.isFavorite }
        }
        return applicant
      })
    )
    setBookmarkPressed(!bookmarkPressed)
  }

  const saveToStorage = (applicants) => {
    localStorage.setItem(constants.APPLICANT, JSON.stringify(applicants))
    const newApplicants = applicants.filter(
      (applicant) => applicant.isFavorite === true
    )
    localStorage.setItem(
      constants.BOOKMARKED_APPLICANTS,
      JSON.stringify(newApplicants)
    )
  }

  // Save applicants to local storage every time bookmarkToggle is set from toggleBookmark function
  useEffect(() => {
    if (notInitialRender.current) {
      inBookmarksPage
        ? saveToStorage(bookmarkedApplicants)
        : saveToStorage(applicants)
    } else {
      notInitialRender.current = true
    }
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
