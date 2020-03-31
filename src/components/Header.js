import React from 'react'
import dateFormat from 'dateformat'

export default function Header({lastUpdated}) {

  const now = new Date();
  lastUpdated = now - lastUpdated;
  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {dateFormat(lastUpdated, "M")} minutes ago</p>
    </header>
  )
}