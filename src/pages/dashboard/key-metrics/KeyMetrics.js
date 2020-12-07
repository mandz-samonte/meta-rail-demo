import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useHistory } from 'react-router-dom';
import moment from 'moment';

import DashboardCard from '../DashboardCard';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const SAMPLE_LINE_DATA = generateDates(new Date(moment().subtract(30, 'days').format('YYYY-MM-DD')), new Date()).map((date) => {
  return {
    date: date,
    sales: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    cogs: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    margin: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    clicks: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    impressions: Math.floor(Math.random() * (100 - 1 + 1) + 1)
  }
})

function generateValues(entities) {
  let values = [];

  let total = 0.00;
  let randomLimit = Math.floor(Math.random() * (6 - 1) + 1);

  for(let i = 0; i < randomLimit; i++) values.push({
    id: i,
    entity: entities[1],
    value: parseFloat(Math.floor(Math.random() * (500 - 1 + 1) + 1 ).toFixed(2))
  });

  for(let i = 0; i < randomLimit; i++) total += parseFloat(values[i].value.toFixed(2));

  return [
    {
      id: 'random-1',
      entity: entities[0],
      value: total,
      breakdowns: values
    }
  ]
}

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function KeyMetrics({ params }) {
  const [gradient, setGradient] = useState('');
  const [selectedValue, setSelectedValue] = useState('sales');
  const [publishers, setPublishers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const query = useQuery();

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

    SAMPLE_LINE_DATA.forEach(data => {
      values[0].total += data.sales;
      values[1].total += data.cogs;
      values[2].total += data.margin;
      values[3].total += data.clicks;
      values[4].total += data.impressions;
    })

    return values;
  }

  function setTitle(text, breakdown) {
    if(!breakdown || !breakdown.length) return

    return `${text} ${ breakdown[0].entity && breakdown[0].entity.charAt(0).toUpperCase() + breakdown[0].entity.slice(1)}`;
  }

  function handleSelectBreakdown(breakdowns, id, set) {
    query.set('entity_id', id)
    query.set('entity', 'publisher')

    history.push(`${location.pathname}?${query.toString()}`)

    let breakdown = breakdowns.filter(breakdown => breakdown.id === id)

    breakdown[0].breakdowns
      ? set(breakdown[0].breakdowns)
      : set(breakdown)

    setTitle(breakdown.entity);
  }

  useEffect(() => {
    const chart = document.getElementById('key-metrics-line-chart').getContext('2d');
    var gradient = chart.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, '#009348');
    gradient.addColorStop(1, '#00d4ff');

    setGradient(gradient);

    setPublishers(generateValues(['publisher', 'units']));
    setCampaigns(generateValues(['campaigns', 'placements']));
  }, []);

  return (
    <DashboardCard
      className="key-metrics"
      title="Key Metrics"
      icons={['info', 'sync-alt', 'cog', 'expand-arrows-alt']}
    >
      <LineChart
        labels={SAMPLE_LINE_DATA.map(data => data.date)}
        data={SAMPLE_LINE_DATA.map(data => data[selectedValue])}
        color={gradient}
      />

      <div className="ad-spends">
        {
          setAdSpendTotals().map((adSpends, key) => (
            <span
              key={key}
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
        <DoughnutChart
          title={setTitle('Revenue by', publishers)}
          id="publisher"
          data={publishers}
          trackBy="value"
          breakdowns={publishers}
          handleSelectBreakdown={(id) => handleSelectBreakdown(publishers, id, setPublishers)}
        />
        <DoughnutChart
          title={setTitle('Spend by', campaigns)}
          id="advertiser"
          data={campaigns}
          trackBy="value"
          breakdowns={campaigns}
          handleSelectBreakdown={(id) => handleSelectBreakdown(campaigns, id, setCampaigns)}
        />
        <DoughnutChart
          title="By Industries"
          id="industry"
          data={SAMPLE_LINE_DATA}
          trackBy="sales"
        />
        <DoughnutChart
          title="By Vertical"
          id="vertical"
          data={SAMPLE_LINE_DATA}
          trackBy="sales"
        />
      </div>

      <div className="key-metrics-footer">
        <span className="show-all">
            Show All Publishers <FontAwesomeIcon icon="caret-down" size="lg" />
        </span>
        <span className="show-all">
          Show All Advertisers <FontAwesomeIcon icon="caret-down" size="lg" />
        </span>
        <span className="show-all">
          Show All Industries <FontAwesomeIcon icon="caret-down" size="lg" />
        </span>
        <span className="show-all">
          Show All Verticals <FontAwesomeIcon icon="caret-down" size="lg" />
        </span>
      </div>
    </DashboardCard>
  )
}

export default KeyMetrics;
