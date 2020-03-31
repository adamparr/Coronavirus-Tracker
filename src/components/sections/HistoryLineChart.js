import React, { useState, useEffect } from "react"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import dateFormat from 'dateformat'
import numberWithCommas from '../../Helpers'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function HistoryLineChart({timeline}) {

  const [timelineArray, setTimelineArray] = useState([]);

  useEffect(() => {
    const tempArray = Object.keys(timeline).map(key => {
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

    setTimelineArray(tempArray);

  }, [timeline])

  const CustomTooltip = ({ payload, label, active }) => {
    if (!active) return null;

    return (
      <div className="custom-tooltip">
        <p className="tt-label">{label}</p>
        <p className="tt-stat" style={{backgroundColor: 'blue'}}>Cases: <span>{numberWithCommas(payload[0].value)}</span></p>
        <p className="tt-stat" style={{backgroundColor: 'red'}}>Deaths: <span>{numberWithCommas(payload[1].value)}</span></p>
        <p className="tt-stat" style={{backgroundColor: 'green'}}>Recovered: <span>{numberWithCommas(payload[2].value)}</span></p>
      </div>
    )
  }

  return (
    <Grid xs sm={8} item>
      <Card className="card" style={{ height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={timelineArray}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="cases" stroke="blue" />
            <Line type="monotone" dataKey="deaths" stroke="red" />
            <Line type="monotone" dataKey="recovered" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
}
