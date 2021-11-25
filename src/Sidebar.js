import React from 'react'
import { FaTimes, FaHome, FaStar } from 'react-icons/fa'

const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/bookmarks',
    text: 'Bookmarks',
    icon: <FaStar />,
  },
]

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
      <div className='sidebar-header'>
        <h4>My Dashboard</h4>
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
