import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'

export default function Global({data, timeline}) {

  const { cases, deaths, recovered }  = data;

  const yesterday = Object.keys(timeline)[Object.keys(timeline).length-1];
  console.info(timeline[yesterday]);

  const { cases: prevCases, deaths: prevDeaths, recovered: prevRecovered } = timeline[yesterday];

  return (
    <Container className="globalStats">
      <Grid
        container
        spacing={3}
        justify="center"
      >
        <Grid xs={12} sm item>
          <Card className="card">
            <h3>Cases</h3>
            <span className="stat">{cases}</span>
            <span className="prevStat">{cases - prevCases} today</span>
            <div className="bar blue"/>
          </Card>
        </Grid>

        <Grid xs item>
          <Card className="card">
            <h3>Deaths</h3>
            <span className="stat">{deaths}</span>
            <span className="prevStat">{deaths - prevDeaths} today</span>
            <div className="bar red"/>
          </Card>
        </Grid>

        <Grid xs item>
          <Card className="card">
            <h3>Recovered</h3>
            <span className="stat">{recovered}</span>
            <span className="prevStat">{recovered - prevRecovered} today</span>
            <div className="bar green"/>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}
