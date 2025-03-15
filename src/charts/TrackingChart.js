import React from 'react';
import trackingData from '../assets/dummy-data/trackingData'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function TrackingChart() {
  return (
    <ResponsiveContainer width='100%'>

        <LineChart margin={{
            top: 5,
            right:30,
            left: 20,
            bottom: 5,
            }}>
                <CartesianGrid strokeDasharray='0' stroke='#b7ffe914'/>
                <XAxis dataKey='name' fill='#ddd'/>
                <YAxis dataKey='mt' fill='#ddd'/>

                <Line type='monotone' dataKey='km' data={trackingData} stroke='#e1424e' strokeWidth={2} activeDot={{ r: 8 }}/>
                <Tooltip wrapperClassName='tooltip__styl'/>

        </LineChart>

    </ResponsiveContainer>
  )
}

export default TrackingChart