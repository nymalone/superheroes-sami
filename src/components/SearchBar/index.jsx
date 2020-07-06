import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Searchbar = ({
  filterHeroes,
  query
}) => {
  return (
    <input
      type='text'
      className='searchbar-input'
      onChange={e => filterHeroes(e, e.target.value)}
      value={query}
    />
  )
}

Searchbar.propTypes = {
  filterHeroes: PropTypes.func,
  query: PropTypes.string
}

export default Searchbar
