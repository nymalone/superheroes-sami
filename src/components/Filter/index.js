import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar'
import './styles.scss'
import Button from '../Button'

const Filter = ({
  filterHeroes,
  query,
  setQuery
}) => {
  return (
    <div className='filter-container'>

      <div className='filterbar-container'>
        <span className='filterbar-title'>
            Search for a hero name:
        </span>
        <div className='filterbar-content'>
          <SearchBar
            filterHeroes={filterHeroes}
            query={query}
          />
        </div>
        <Button
          text='Reset name'
          onClick={() => setQuery('')}
        />
      </div>
    </div>

  )
}

Filter.propTypes = {
  filterHeroes: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    combat: PropTypes.number,
    durability: PropTypes.number,
    intelligence: PropTypes.number,
    power: PropTypes.number,
    speed: PropTypes.number,
    strength: PropTypes.number
  }),
  setFilterStats: PropTypes.func.isRequired,
  resetFilterStats: PropTypes.func.isRequired,
  query: PropTypes.string,
  setQuery: PropTypes.func
}

export default Filter
