import Navbar from './Navbar';
import Sidebar from './Sidebar';
import KeyMetrics from './key-metrics/KeyMetrics';
import MapView from './map-view/MapView';
import PerformanceMetrics from './performance-metrics';
import CampaignMetrics from './campaign-metrics';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Navbar />
        <Sidebar />
        <KeyMetrics />
        <MapView />
        <PerformanceMetrics />
        <CampaignMetrics />
      </div>
    </div>
  )
}

export default Dashboard;
