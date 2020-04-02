import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import moment from 'moment';

export default function VirusStats({countryData, globalData}) {

  const deathRate = globalData.cases / globalData.deaths;
  const recoveryRate = 100 - deathRate;

  var nationsAffected = 0;

  countryData.forEach(country => {
    if (country.cases > 0) nationsAffected += 1;
  })

  const daysSince = moment().diff(moment.unix(1573948800),'days');


  return (
     <Grid xs={12} md={6} lg={5} item>
      <Card className="card" style={{ height: 350 }}>
        <h3 className="card-title">Virus Statistics</h3>

        <Grid className="virusStats-grid" container spacing={3} justify="center">
          <Grid xs={6}item>
            <div>
              <span className="stat green-text">{recoveryRate.toFixed(2)}%</span>
              <p className="stat-text">Recovery Rate</p>
            </div>
          </Grid>
          
          <Grid xs={6}item>
            <div>
              <span className="stat red-text">{deathRate.toFixed(2)}%</span>
              <p className="stat-text">Death Rate</p>
            </div>
          </Grid>

          <Grid xs={6} item>
            <div>
              <span className="stat blue-text">{nationsAffected}</span>
              <p className="stat-text">Nations Affected</p>
            </div>
          </Grid>

          <Grid xs={6}item>
            <div>
              <span className="stat yellow-text">{daysSince}<span className="days-small">days</span></span>
              <p className="stat-text">Since First Case</p>
            </div>
          </Grid>
        </Grid>

      </Card>
    </Grid>
  )
}
