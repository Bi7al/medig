'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { LineChart } from '@mui/x-charts';
interface ChartData {
    data: number[];
    label: string;
}

interface ChartAxis {
    data: number[];
    label: string;
}
function LinearChart() {
    // Renders a Line Chart Using the Material UI Charts Library. The Chart Component Takes Data sets to Plot on the Charts


    // Data to Plot On Chart
    const chartData: ChartData[] = [{
        data: [100, 350, 410, 550, 750, 1000, 1250, 1560],
        label: 'Patient Count'
    },]
    // Count of Years Along X-Axis
    const axisData: ChartAxis[] = [{
        data: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        label: 'Years',
    }]
    return (


        <motion.div
            className='h-[35vh] md:h-[50vh] w-[100vw] md:w-[45vw]'
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={
                {
                    duration: .3,
                    ease: "easeOut"

                }
            }
        >
            <LineChart
                series={chartData}
                xAxis={axisData}
            />
        </motion.div>
    )
}

export default LinearChart