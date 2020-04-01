import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import numberWithCommas from '../../Helpers'

export default function CircularBarChart({ data }) {
  data = [
    {
      name: "deaths",
      value: data["deaths"],
      fill: "#e24f3f"
    },
    {
      name: "recovered",
      value: data["recovered"],
      fill: "#47bd61"
    },
    {
      name: "cases",
      value: data["cases"],
      fill: "#438ce6"
    }
  ];

  const CustomTooltip = ({ payload, label, active }) => {
    if (!active) return null;
    payload = payload[0].payload;

    return (
      <div className={`custom-tooltip ${ payload.name}`}>
        <p className="tt-label">{payload.name}: {numberWithCommas(payload.value)}</p>
      </div>
    )
  }

  return (
    <Grid xs={12} md={4} className="radial" item>
      <Card className="card" style={{ height: 400, position: 'relative' }}>
        <h3 className="card-title">Radial Visualisation</h3>
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="30%" 
            outerRadius="100%"
            data={data} 
            startAngle={135} 
            endAngle={-135}
            barSize={70}
          >
            <RadialBar
              cornerRadius={10}
              background={{fill: '#232731'}}
              dataKey="value"
              animationDuration={4000}
            />
            <Tooltip content={<CustomTooltip/>} />
            <Legend verticalAlign="top" height={10}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
}
