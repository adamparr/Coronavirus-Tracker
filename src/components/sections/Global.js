import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function Global({data, timeline}) {

  const { cases, deaths, recovered }  = data;

  const yesterday = Object.keys(timeline)[Object.keys(timeline).length-1];
  console.info(timeline[yesterday]);

  const { cases: prevCases, deaths: prevDeaths, recovered: prevRecovered } = timeline[yesterday];

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <div>
        <p>cases: {cases}</p>
        <p>{cases - prevCases} today</p>
      </div>
      <div>
        <p>deaths: {deaths}</p>
        <p>{deaths - prevDeaths} today</p>
      </div>
      <div>
        <p>recovered: {recovered}</p>
        <p>{recovered - prevRecovered} today</p>
      </div>
    </Grid>
  )
}
