import { Doughnut } from 'react-chartjs-2';

function DoughnutChart({
  title,
  data
}) {
  return (
    <div className="doughnut-chart">
      <div className="doughnut">
        <Doughnut
          data={data}
          options={{
            legend: {
              display: false
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
