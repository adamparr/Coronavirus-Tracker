import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import numberWithCommas from '../../Helpers'

export default function CasesDistribution({countryData, totalCases}) {

  const slice = 6;
  const restOfWorld = countryData.slice(slice);
  var restOfWorldCases = 0;

  restOfWorld.forEach((country) => {
    restOfWorldCases += country.cases;
  })

  var data = countryData.slice(0,slice);
  data.push({country: 'Other', cases: restOfWorldCases});


  const COLORS = ['#352f83', '#4c2f83', '#6b2f83', '#832f7c', '#832f60', '#832f41', '#792e2e'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.75;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor='middle' dominantBaseline="middle">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ payload, label, active }) => {
    if (!active) return null;
    console.log(payload);
    data = payload[0].payload.payload;

    return (
      <div style={{backgroundColor: payload[0].payload.fill}} className={`custom-tooltip ${data.name}`}>
        <p className="tt-label">{data.country}: {numberWithCommas(data.cases)}</p>
      </div>
    )
  }

  return (
    <Grid xs={12} md={4} item>
      <Card className="card" style={{ height: 400 }}>
        <h3 className="card-title">Distribution Of Cases By Country</h3>

        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="cases"
              outerRadius="85%"
              nameKey="country"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip content={<CustomTooltip/>} />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </Grid>
  )
}