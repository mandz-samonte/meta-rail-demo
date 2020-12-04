import { Doughnut } from 'react-chartjs-2';

function DoughnutChart({
  title,
  labels = [],
  data = []
}) {
  return (
    <div className="doughnut-chart">
      <div className="doughnut">
        <Doughnut
          data={{
            labels: labels.map(data => data.date),
            datasets: [{
              data: data.map(data => data.sales),
              backgroundColor: 'rgba(255, 115, 115, 0.5)',
              hoverBackgroundColor: 'rgba(255, 115, 115, 1)',
              hoverBorderWidth: 0,
            }]
          }}
          options={{
            legend: {
              display: false
            },
            tooltips: {
              enabled: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI
          }}
        />
      </div>

      <span className="doughnut-title">{ title }</span>
      <div className="breakdowns">
        <span>$47.00 - MR-PUB-Dev2020</span>
      </div>
    </div>
  )
}

export default DoughnutChart;
