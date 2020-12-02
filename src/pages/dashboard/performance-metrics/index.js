import DashboardCard from '../DashboardCard';

import Widget from './Widget';

function PerformanceMetrics() {
  return (
    <DashboardCard
      className="performance-metrics"
      title="Performance Metrics"
      icons={['info', 'expand-arrows-alt']}
    >
      <div className="performance-metrics-body">
        <Widget
          title="ROAS"
          description="Return on Ad Spend"
        />
        <Widget
          title="ROAS"
          description="Return on Ad Spend"
        />
        <Widget
          title="ROAS"
          description="Return on Ad Spend"
        />
        <Widget
          title="ROAS"
          description="Return on Ad Spend"
        />
      </div>
    </DashboardCard>
  )
}

export default PerformanceMetrics;
