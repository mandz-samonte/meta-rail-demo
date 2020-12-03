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
              stepSize: 20
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            ticks: {
              source: 'labels'
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
