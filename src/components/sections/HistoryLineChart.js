import React from "react"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import dateFormat from 'dateformat'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function HistoryLineChart({timeline}) {

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

  return (
    <Grid xs sm={8} item>
      <Card className="card" style={{ height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={timelineArray}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cases" stroke="blue" />
            <Line type="monotone" dataKey="deaths" stroke="red" />
            <Line type="monotone" dataKey="recovered" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
}
