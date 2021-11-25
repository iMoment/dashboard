import React from 'react'
import { FaTimes, FaHome, FaStar } from 'react-icons/fa'
import { useGlobalContext } from './context'

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
  const { isSidebarShown, hideSidebar } = useGlobalContext()
  return (
    <aside className={`${isSidebarShown ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h3>My Dashboard</h3>
        <button className='close-btn' onClick={hideSidebar}>
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
