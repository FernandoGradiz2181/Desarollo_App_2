'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


import { fetchconsulta1 } from '@/app/servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {

    const [chartData, setChartData] = useState({
      labels: [] as string [],
      datasets: [
        {
          data: [] as any [],
        backgroundColor: [] as any [],
        }
      ]

    });

useEffect(() => {

fetchconsulta1().then((data) => {

    const  labels = data.map((item: any) => item.category_code);
    const values = data.map((item: any) => parseInt(item.avg_value));

   setChartData({
     labels,
     datasets: [
       {
         data: values,
         backgroundColor: values.map(() => `rgba(75, 192, 192, 0.2)`),
       },
     ],


    });

   });

}, []);


    



  return (
   <Bar data={chartData}></Bar>
  )
}
    