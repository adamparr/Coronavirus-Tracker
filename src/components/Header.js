import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function Header({updated}) {

  const [lastUpdated, setLastUpdated] = useState(moment.unix(updated / 1000).fromNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(moment.unix(updated / 1000).fromNow());
    }, 30000);

    return () => { clearInterval(interval) }
  })


  return (
    <header>
      <h1>Coronavirus Tracker</h1> 
      <p>Last updated {lastUpdated}</p>
    </header>
  )
}