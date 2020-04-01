import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Loading() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress size={80} />
    </div>
  )
}
