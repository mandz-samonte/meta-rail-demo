import DashboardCard from '../DashboardCard';

import Widget from './Widget';

function CampaignMetrics() {
  return (
    <DashboardCard
      className="campaign-metrics"
      title="Campaign Metrics"
      icons={['info', 'expand-arrows-alt']}
    >
      <div className="campaign-metrics-body">
        <Widget
          title="eCPC"
        />
        <Widget
          title="eCPC"
        />
        <Widget
          title="eCPC"
        />
      </div>
    </DashboardCard>
  )
}

export default CampaignMetrics;
