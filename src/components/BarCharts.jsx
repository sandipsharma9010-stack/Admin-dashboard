import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'  
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import { data } from 'react-router-dom'

function BarCharts() {
  return (
    <>

    <div className='xl:w-[1000px] xl:h-[320px] xl:flex xl:justify-center w-[300px] h[250px] '>
    <Bar
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Pink', 'Brown'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 25, 12, 15, 14, 13, 18, 10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
               'rgba(220, 150, 56, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(240, 150, 60, 1)',
            ],
            borderWidth: 4,
          },
          {
            type:'line',
            label:'Line Dataset',
            data:[1,2,3,4,5,6,7,8],
            borderColor:'red',
            borderWidth:2,
            backgroundColor:'green',
            fill:false,
          }
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              boxWidth: 40,
              boxHight: 40,
              padding: 10,
              useBorderRadius: true,
              borderRadius: 10,
              font: {
                size: 12,
                weight: 'bold',
              },
            },
             
          },
        },
      }}
    />
    
    </div>
    </>
  )
}

export default BarCharts