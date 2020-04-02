import React from 'react'
import moment from 'moment'

export default function Header({lastUpdated}) {

  lastUpdated = moment.unix(lastUpdated / 1000).fromNow()

  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {lastUpdated}</p>
    </header>
  )
}