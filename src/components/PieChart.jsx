import React, { use } from 'react'
import {Chart as ChartJS} from 'chart.js/auto'  
import {Bar, Doughnut, Line} from 'react-chartjs-2'

function PieChart({height,width}) {
  return (
    <>
    
    <Doughnut
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3,],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
            // borderRadius: 5,
            width: 1,
            height: 1
          },
        ],
      }}
      options={{
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },

        // },

        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            fullSize: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              boxWidth: 5,
              boxHight: 5,
              font: {
                size: 12,
                weight: 'bold',
              },
            },
          },
        
          
        },
      }}
    />
    
    
    </>
  )
}

export default PieChart