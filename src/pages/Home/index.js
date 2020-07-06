import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FiLogIn } from 'react-icons/fi'
import './styles.scss'

export default class Home extends Component {
  render () {
    return (
      <div id="home-page">
        <div className="content">
          <header>
            <h1>SAMI HEROES</h1>
          </header>

          <main>
            <h1>Your platform to search for your favorite heroe!</h1>
            <p>We help people find heroes efficiently</p>
            <Link to="/all-heroes">
              <span>
                <FiLogIn />
              </span>
              <strong>START LOOKING</strong>
            </Link>
          </main>
        </div>
      </div>
    )
  }
}
