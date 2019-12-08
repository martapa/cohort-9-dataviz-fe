import React, { PureComponent } from 'react';
import { GraphTitle } from './GraphTitle';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default class LineGraph extends PureComponent {
  render() {
    const reversed = [...this.props.cohorts].reverse();
    return (
      <>
        <GraphTitle text={'Number of Applicants Per Cohort'} />
        <ResponsiveContainer width="99%" height={400}>
          <LineChart
            data={reversed}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis type="number" domain={[40, 50]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="applicants"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
