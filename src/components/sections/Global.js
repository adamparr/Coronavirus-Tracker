import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import numberWithCommas from '../../Helpers'

export default function Global({data, timeline}) {

  const { cases, deaths, recovered }  = data;
  const yesterday = Object.keys(timeline)[Object.keys(timeline).length-1];
  const { cases: prevCases, deaths: prevDeaths, recovered: prevRecovered } = timeline[yesterday];

  return (
    <>
      <Grid xs={12} sm={4} item>
        <Card className="card">
          <h3 className="card-title">Cases</h3>
          <span className="stat">{numberWithCommas(cases)}</span>
          <span className="prevStat">{numberWithCommas(cases - prevCases)} today</span>
          <div className="bar blue"/>
        </Card>
      </Grid>

      <Grid xs sm={4} item>
        <Card className="card">
          <h3 className="card-title">Deaths</h3>
          <span className="stat">{numberWithCommas(deaths)}</span>
          <span className="prevStat">{numberWithCommas(deaths - prevDeaths)} today</span>
          <div className="bar red"/>
        </Card>
      </Grid>

      <Grid xs sm={4} item>
        <Card className="card">
          <h3 className="card-title">Recovered</h3>
          <span className="stat">{numberWithCommas(recovered)}</span>
          <span className="prevStat">{numberWithCommas(recovered - prevRecovered)} today</span>
          <div className="bar green"/>
        </Card>
      </Grid>
    </>
  )
}
