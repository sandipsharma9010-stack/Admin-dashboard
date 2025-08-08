import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'  
import {Bar, Doughnut, Line} from 'react-chartjs-2'

function LineCharts() {
  return (
    <>
    <Line
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        type: 'bar',
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            borderWidth: 4,
          },
          
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
                height: '50'
              },
            },
          },
        },
      }}
    />
    
    
    </>
  )
}

export default LineCharts