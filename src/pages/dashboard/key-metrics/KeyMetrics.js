import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import DashboardCard from '../DashboardCard';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const DOUGHNUT_CHART_TITLES = ['Revenue by Publishers', 'Spend by Advertiser', 'By Industry', 'By Vertical'];

const SAMPLE_DATA = generateDates(new Date(moment().subtract(30, 'days').format('YYYY-MM-DD')), new Date()).map((date) => {
  return {
    date: date,
    sales: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    cogs: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    margin: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    clicks: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    impressions: Math.floor(Math.random() * (100 - 1 + 1) + 1)
  }
})

function generateDates(startDate, endDate) {
  let dates = [];
  let currentDate = startDate;
  let lastGeneratedDate;

  while(new Date(currentDate).toDateString() !== new Date(endDate).toDateString()) {
    let randomDate = new Date(currentDate.getTime() + Math.random() * (endDate.getTime() - currentDate.getTime()));

    if(new Date(randomDate).toDateString() !== new Date(lastGeneratedDate).toDateString()) {
      dates.push(randomDate);
    }

    currentDate = randomDate;
    lastGeneratedDate = randomDate
  }

  return dates;
}

function KeyMetrics({ params }) {
  const [gradient, setGradient] = useState('');
  const [selectedValue, setSelectedValue] = useState('sales');

  function setAdSpendTotals() {
    let values = [
      {
        label: 'Sales',
        total: 0
      },
      {
        label: 'CoGS',
        total: 0
      },
      {
        label: 'Margin',
        total: 0
      },
      {
        label: 'Clicks',
        total: 0
      },
      {
        label: 'Impressions',
        total: 0
      }
    ]

    SAMPLE_DATA.forEach(data => {
      values[0].total += data.sales;
      values[1].total += data.cogs;
      values[2].total += data.margin;
      values[3].total += data.clicks;
      values[4].total += data.impressions;
    })

    return values;
  }

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
      <LineChart
        labels={SAMPLE_DATA.map(data => data.date)}
        data={SAMPLE_DATA.map(data => data[selectedValue])}
        color={gradient}
      />

      <div className="ad-spends">
        {
          setAdSpendTotals().map((adSpends, key) => (
            <span
              className="ad-spend"
              onClick={() => setSelectedValue(adSpends.label.toLowerCase())}
            >
              <span>{ key < 3 && '$'}{adSpends.total}</span>
              <p>{adSpends.label}</p>
            </span>
          ))
        }
      </div>

      <div className="doughnut-charts">
        {
          DOUGHNUT_CHART_TITLES.map((title, key) => (
            <DoughnutChart
              title={title}
              data={SAMPLE_DATA}
            />
          ))
        }
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
