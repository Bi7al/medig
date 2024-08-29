'use client'
import React from 'react'
import { LineChart, LinePlot, ResponsiveChartContainer } from '@mui/x-charts';
interface ChartData {
    data: number[];
    label: string;
}

interface ChartAxis {
    data: number[];
    label: string;
}
function LinearChart() {
    const chartData: ChartData[] = [{
        data: [100, 350, 410, 550, 750, 1000, 1250, 1560],
        label: 'Patient Count'
    },]
    const axisData: ChartAxis[] = [{
        data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        label: 'Years',
    }]
    return (


        <div className='h-[35vh] md:h-[50vh] w-[100vw] md:w-[45vw]'>
            <LineChart
                series={chartData}
                xAxis={axisData}
            />
        </div>
    )
}

export default LinearChart