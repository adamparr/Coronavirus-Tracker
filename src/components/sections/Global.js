import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import dateFormat from 'dateformat'
import numberWithCommas from '../../Helpers'

export default function Global({data, timeline}) {

  const { cases, deaths, recovered }  = data;
  const yesterday = Object.keys(timeline)[Object.keys(timeline).length-1];
  const { cases: prevCases, deaths: prevDeaths, recovered: prevRecovered } = timeline[yesterday];

  const timelineArray = Object.keys(timeline).map(key => {
    const date = dateFormat(key, "mmm d");
    return (
      {
        date,
        cases: timeline[key]['cases'], 
        deaths: timeline[key]['deaths'], 
        recovered: timeline[key]['recovered']
      }
    )
  })

  console.log(timelineArray);

  return (
    <Container className="globalStats">
      <Grid
        container
        spacing={3}
        justify="center"
      >
        <Grid xs={12} sm={4} item>
          <Card className="card">
            <h3>Cases</h3>
            <span className="stat">{numberWithCommas(cases)}</span>
            <span className="prevStat">{numberWithCommas(cases - prevCases)} today</span>
            <div className="bar blue"/>
          </Card>
        </Grid>

        <Grid xs sm={4} item>
          <Card className="card">
            <h3>Deaths</h3>
            <span className="stat">{numberWithCommas(deaths)}</span>
            <span className="prevStat">{numberWithCommas(deaths - prevDeaths)} today</span>
            <div className="bar red"/>
          </Card>
        </Grid>

        <Grid xs sm={4} item>
          <Card className="card">
            <h3>Recovered</h3>
            <span className="stat">{numberWithCommas(recovered)}</span>
            <span className="prevStat">{numberWithCommas(recovered - prevRecovered)} today</span>
            <div className="bar green"/>
          </Card>
        </Grid>

        <Grid xs sm={8} item>
          <Card className="card" style={{height: 400}}>
            <ResponsiveContainer>
              <LineChart
                data={timelineArray}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cases" stroke="blue"/>
                <Line type="monotone" dataKey="deaths" stroke="red"/>
                <Line type="monotone" dataKey="recovered" stroke="green"/>
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>


      </Grid>
    </Container>
  )
}
