import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Line, Doughnut } from 'react-chartjs-2';

import DashboardCard from '../DashboardCard';

const SAMPLE_DATA = [
  {
    title: '50',
    value: 50
  },
  {
    title: '25',
    value: 25
  },
  {
    title: '100',
    value: 90
  },
  {
    title: '70',
    value: 70
  }
]

function KeyMetricsDoughnutChart({ title, data }) {
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

function KeyMetrics() {
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    const chart = document.getElementById('key-metrics-line-chart').getContext('2d');
    var gradient = chart.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, '#009348');
    gradient.addColorStop(1, '#00d4ff');

    setGradient(gradient);
  }, []);

  return (
    <DashboardCard
      className="key-metrics"
      title="Key Metrics"
      icons={['info', 'sync-alt', 'cog', 'expand-arrows-alt']}
    >
      <div>
        <Line
          id="key-metrics-line-chart"
          height={30}
          width={100}
          data={{
            labels: SAMPLE_DATA.map(data => data.title),
            datasets: [{
              fill: 'start',
              data: SAMPLE_DATA.map(data => data.value),
              backgroundColor: gradient,
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
                }
              }]
            }
          }}
        />
      </div>

      <div className="ad-spends">
        <a href="#">
          <span>$123.16</span>
          <p>Sales</p>
        </a>
        <a href="#">
          <span>$73.90</span>
          <p>CoGS</p>
        </a>
        <a href="#">
          <span>$49.26</span>
          <p>Margin</p>
        </a>
        <a href="#">
          <span>20</span>
          <p>Clicks</p>
        </a>
        <a href="#">
          <span>0</span>
          <p>Impressions</p>
        </a>
      </div>

      <div className="doughnut-charts">
        <KeyMetricsDoughnutChart
          title="Revenue by Unit"
          data={{
            labels: SAMPLE_DATA.map(data => data.title),
            datasets: [{
              data: SAMPLE_DATA.map(data => data.value),
              backgroundColor: 'rgba(255, 115, 115, 100)',
            }]
          }}
        />
        <KeyMetricsDoughnutChart
          title="Spend by Advertiser"
          data={{
            labels: SAMPLE_DATA.map(data => data.title),
            datasets: [{
              data: SAMPLE_DATA.map(data => data.value),
              backgroundColor: 'rgba(255, 115, 115, 100)',
            }]
          }}
        />
        <KeyMetricsDoughnutChart
          title="By Industry"
          data={{
            labels: SAMPLE_DATA.map(data => data.title),
            datasets: [{
              data: SAMPLE_DATA.map(data => data.value),
              backgroundColor: 'rgba(255, 115, 115, 100)',
            }]
          }}
        />
        <KeyMetricsDoughnutChart
          title="By Vertical"
          data={{
            labels: SAMPLE_DATA.map(data => data.title),
            datasets: [{
              data: SAMPLE_DATA.map(data => data.value),
              backgroundColor: 'rgba(255, 115, 115, 100)',
            }]
          }}
        />
      </div>

      <div className="key-metrics-footer">
        <span className="show-all">Show All Publishers <FontAwesomeIcon icon="caret-down" size="lg" /></span>
        <span className="show-all">Show All Advertisers <FontAwesomeIcon icon="caret-down" size="lg" /></span>
        <span className="show-all">Show All Industries <FontAwesomeIcon icon="caret-down" size="lg" /></span>
        <span className="show-all">Show All Verticals <FontAwesomeIcon icon="caret-down" size="lg" /></span>
      </div>
    </DashboardCard>
  )
}

export default KeyMetrics;
