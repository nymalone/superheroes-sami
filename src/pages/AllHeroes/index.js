import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isMatchWith from 'lodash.ismatchwith'

import Filter from '../../components/Filter'
import HeroesList from '../../components/HeroesList'
import Header from '../../components/Header'
import HeroModal from '../components/HeroModal'
import Spinner from '../../components/Spinner'
import { fetchAllHeroesList } from '../redux/heroes'
import { allLetters, TOTAL_NUMBER_OF_HEROES } from '../../helpers/utils'

import './styles.scss'

function AllHeroes () {
  const dispatch = useDispatch()
  const sortedHeroesArray = useSelector(state => state.heroesReducer.heroesArray, shallowEqual)
  const isPopulatingDone = useSelector(state => state.heroesReducer.isInitialFetchDone)
  const missingSeedLetters = useSelector(state => state.heroesReducer.failedFetchingLetters)

  const [query, setQuery] = useState('')
  const [stats, setStats] = useState({})
  const [selectedHero, setSelectedHero] = useState(null)

  useEffect(() => {
    dispatch(fetchAllHeroesList(allLetters))
  }, [dispatch])

  useEffect(() => {
    if (isPopulatingDone && missingSeedLetters.length > 0 && sortedHeroesArray.length < TOTAL_NUMBER_OF_HEROES) {
      dispatch(fetchAllHeroesList(missingSeedLetters))
    }
  }, [isPopulatingDone, missingSeedLetters, sortedHeroesArray, dispatch])

  const filterHeroes = (e, query) => {
    setQuery(query)
    e.preventDefault()
  }

  const heroClick = hero => {
    setSelectedHero(hero)
  }

  const deselectHero = () => {
    setSelectedHero(null)
  }

  const setFilterStats = ({ statName, value }) => {
    setStats(prevState => {
      return { ...prevState, [statName]: value }
    })
  }

  const resetFilterStats = () => {
    setStats({})
  }

  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Filter
          filterHeroes={filterHeroes}
          setFilterStats={setFilterStats}
          resetFilterStats={resetFilterStats}
          stats={stats}
          query={query}
          setQuery={setQuery}
        />
        {!isPopulatingDone
          ? <Spinner />
          : (
            <HeroesList
              heroArray={sortedHeroesArray
                .filter(
                  el => el.name.toLowerCase().includes(query.toLowerCase()) &&
                  isMatchWith(
                    el.powerstats,
                    stats,
                    (objVal, srcVal) => +objVal >= srcVal
                  )
                )}
              onHeroClick={heroClick}
            />
          )}

      </div>
      {selectedHero && (
        <>
          <HeroModal
            hero={selectedHero}
            deselectHero={deselectHero}
          />

        </>
      )}
    </div>
  )
}

export default AllHeroes
