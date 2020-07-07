/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types'

import { CardColumns, Card } from 'react-bootstrap'

const HeroesList = ({
  heroArray = [],
  onHeroClick
}) => {
  return (
    <>
      <CardColumns >
        {heroArray.map((el) => (
          <Card
            key={el.id}
            onClick={() => onHeroClick(el)}
            style={{ marginBottom: 20, width: 300, height: 460 }}
          >
            <Card.Img variant="top" src={el.image.url} alt={el.name} style={{ height: 400, width: 300 }}/>
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </>
  )
}

HeroesList.propTypes = {
  heroArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.shape({
      intelligence: PropTypes.string,
      strength: PropTypes.string,
      speed: PropTypes.string,
      durability: PropTypes.string,
      power: PropTypes.string,
      combat: PropTypes.string
    }),
    biography: PropTypes.shape({
      'full-name': PropTypes.string,
      'alter-egos': PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      'place-of-birth': PropTypes.string,
      'first-appearance': PropTypes.string,
      publisher: PropTypes.string,
      alignment: PropTypes.string
    }),
    appearance: PropTypes.shape({
      gender: PropTypes.string,
      race: PropTypes.string,
      height: PropTypes.arrayOf(PropTypes.string),
      weight: PropTypes.arrayOf(PropTypes.string),
      'eye-color': PropTypes.string,
      'hair-color': PropTypes.string
    }),
    work: PropTypes.shape({
      occupation: PropTypes.string,
      base: PropTypes.string
    }),
    connections: PropTypes.shape({
      'group-affiliation': PropTypes.string,
      relatives: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })).isRequired,
  onHeroClick: PropTypes.func.isRequired
}

export default HeroesList
