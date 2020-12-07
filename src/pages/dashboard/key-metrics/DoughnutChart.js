import { Doughnut } from 'react-chartjs-2';
import { CustomScrollPane } from '../../../components';

function DoughnutChart({
  title,
  labels = [],
  data = [],
  trackBy,
  breakdowns = [],
  handleSelectBreakdown,
  id
}) {
  function handleClick(id) {
    handleSelectBreakdown(id);
  }

  return (
    <div className="doughnut-chart">
      <div className="doughnut">
        <Doughnut
          data={{
            labels: labels.map(data => data.title),
            datasets: [{
              data: data.map(data => data[trackBy]),
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
      <CustomScrollPane id={id} className="breakdowns">
        {
          breakdowns.map((breakdown, key) => (
            <span
              key={key}
              onClick={() => handleClick(breakdown.id)}
            >
              { breakdown.value } - { breakdown.id }
            </span>
          ))
        }
      </CustomScrollPane>
    </div>
  )
}

export default DoughnutChart;
