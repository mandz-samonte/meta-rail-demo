import { Line } from 'react-chartjs-2';

function LineChart({
  labels,
  data,
  color
}) {
  return (
    <Line
      id="key-metrics-line-chart"
      height={30}
      width={100}
      data={{
        labels: labels,
        datasets: [{
          fill: 'start',
          data: data,
          backgroundColor: color,
          borderColor: 'rgba(54, 162, 235, 100)',
          borderWidth: 5,
          pointRadius: 10,
          pointHoverRadius: 10,
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: color
        }]
      }}
      options={{
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              stepSize: 20,
              minor: {
                fontColor: '#d6d6d6'
              }
            },
            gridLines: {
              drawOnChartArea: false,
            },
          }],
          xAxes: [{
            ticks: {
              source: 'labels',
              minor: {
                fontColor: '#d6d6d6'
              }
            },
            type: 'time',
            time: {
              unit: 'day',
            },
            distribution: 'series',
            gridLines: {
              display: false
            }
          }]
        }
      }}
    />
  )
}

export default LineChart;
