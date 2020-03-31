import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from "recharts";

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

  return (
    <Grid xs md={4} className="radial" item>
      <Card className="card" style={{ height: 400, position: 'relative' }}>
        <h3 className="card-title">Radial Visualisation</h3>
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="30%" 
            data={data} 
            startAngle={90} 
            endAngle={-180}
            barSize={40}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#fff", position: "insideStart" }}
              background={{fill: '#232731'}}
              clockwise
              dataKey="value"
            />
            <Legend verticalAlign="top" height={36}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  );
}
