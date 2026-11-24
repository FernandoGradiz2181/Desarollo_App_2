'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { fetchconsulta3 } from '@/app/servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {

    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [
            {
                data: [] as any[],
                backgroundColor: [] as any[],
            }
        ]
    });

    useEffect(() => {

        fetchconsulta3().then((data) => {

            const labels = ["Valor mínimo"];
            const values = data.map((item: any) => 
                parseFloat(item["Encontrar el producto con el valor más bajo"])
            );

            setChartData({
                labels,
                datasets: [
                    {
                        data: values,
                        backgroundColor: values.map(() => `rgba(255, 99, 132, 0.2)`),
                    },
                ],
            });

        });

    }, []);

    return (
        <Bar data={chartData}></Bar>
    )
}