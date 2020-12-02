import { Card } from '../../components';

function Navbar() {
  return (
    <div className="navbar">
      <Card className="nav-logo">
        <h2>MetaRail</h2>

        <span>Insights</span>
      </Card>

      <Card className="nav-filter">
        <ul>
          <li>Today</li>
          <li>Last 7 Days</li>
          <li>Custom</li>
        </ul>
      </Card>
    </div>
  )
}

export default Navbar;
