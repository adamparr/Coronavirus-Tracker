import React from 'react'
import moment from 'moment'

export default function Header({lastUpdated}) {

  lastUpdated = lastUpdated / 1000;

  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {moment.unix(lastUpdated).fromNow()}</p>
    </header>
  )
}