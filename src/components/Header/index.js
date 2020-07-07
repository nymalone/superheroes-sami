import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => (
  <div className='header'>
    <Link to="/">
      <span className='header-logo'>SAMI HEROES</span>
    </Link>
  </div>
)

export default Header
