import React from 'react'

export default function Header({lastUpdated}) {

  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {lastUpdated}</p>
    </header>
  )
}