import React from 'react'
import { Link } from 'react-router-dom'

const Bookmarks = () => {
  return (
    <div className='container'>
      <h1>Bookmarks Page</h1>
      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </div>
  )
}

export default Bookmarks
