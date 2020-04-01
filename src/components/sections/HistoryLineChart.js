import React, { useState, useEffect } from "react"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import moment from 'moment'
import numberWithCommas, {nFormatter} from '../../Helpers'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function HistoryLineChart({timeline}) {

  const [timelineArray, setTimelineArray] = useState([]);

  useEffect(() => {
    const tempArray = Object.keys(timeline).map(key => {
      const date = moment(key).format("MMM D");
      return (
        {
          date,
          cases: timeline[key]['cases'], 
          deaths: timeline[key]['deaths'], 
          recovered: timeline[key]['recovered'],
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
        <p className="tt-stat" style={{backgroundColor: '#438ce6'}}>Cases: <span>{numberWithCommas(payload[0].value)}</span></p>
        <p className="tt-stat" style={{backgroundColor: '#e24f3f'}}>Deaths: <span>{numberWithCommas(payload[1].value)}</span></p>
        <p className="tt-stat" style={{backgroundColor: '#47bd61'}}>Recovered: <span>{numberWithCommas(payload[2].value)}</span></p>
      </div>
    )
  }

  const formatter = (value) => {
    return nFormatter(value);
  }

  return (
    <Grid xs={12} md={8} item>
      <Card className="card" style={{ height: 400 }}>
        <h3 className="card-title">Change Over Time</h3>
        <ResponsiveContainer>
          <LineChart margin={{top: 30,right: 15,bottom: 15,left: 15}} data={timelineArray}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis height={60} tickMargin={10} minTickGap={15} dataKey="date" />
            <YAxis width={30} tickFormatter={formatter} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="cases" stroke="#438ce6" />
            <Line type="monotone" dataKey="deaths" stroke="#e24f3f" />
            <Line type="monotone" dataKey="recovered" stroke="#47bd61" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
}
