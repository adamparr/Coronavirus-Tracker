import React from 'react'

export default function Header({lastUpdated}) {

  if (lastUpdated = 'a few seconds ago') lastUpdated = 'less than a minute ago';

  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {lastUpdated}</p>
    </header>
  )
}