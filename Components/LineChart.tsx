'use client'
import React from 'react'
import { LineChart, LinePlot, ResponsiveChartContainer } from '@mui/x-charts';
function LinearChart() {
    return (


        <div className='h-[35vh] md:h-[50vh] w-[100vw] md:w-[45vw]'>
            <LineChart
                series={[{
                    data: [100, 350, 410, 550, 750, 1000, 1250, 1560],

                    label: 'Patient Count'
                },
                ]}
                xAxis={[{
                    data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                    label: 'Years',
                },
                ]}

            />
        </div>
    )
}

export default LinearChart