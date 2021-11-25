import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container'>
      <h1>Error Page</h1>
      <Link to='/' className='btn'>
        Back to Dashboard
      </Link>
    </div>
  )
}

export default Error
