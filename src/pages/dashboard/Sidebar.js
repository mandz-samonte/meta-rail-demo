import { Card, Tag, CustomScrollPane } from '../../components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const INDUSTRIES = [
  {
    label: 'All',
    link: '/'
  },
  {
    label: 'Insurance',
    link: '/'
  },
  {
    label: 'Travel',
    link: '/'
  },
  {
    label: 'Education',
    link: '/'
  },
  {
    label: 'Finance',
    link: '/'
  },
  {
    label: 'Media & Communications',
    link: '/'
  },
  {
    label: 'Apparel',
    link: '/'
  }
]

const VERTICALS = [
  {
    label: 'All',
    link: '/'
  },
  {
    label: 'Health',
    link: '/'
  },
  {
    label: 'Life',
    link: '/'
  },
  {
    label: 'Auto',
    link: '/'
  },
  {
    label: 'Property',
    link: '/'
  }
]

function Sidebar() {
  return (
    <Card className="sidebar">
      <div className="user-info">
        <span>Sample Full Name</span>
        <div className="user-type">
          <Tag>Admin</Tag>
          <Tag>Advertiser</Tag>
          <Tag>Publisher</Tag>
        </div>
      </div>

      <div className="sidebar-filters">
        <span className="category-title">Industries</span>
          <CustomScrollPane id="industries">
            {
              INDUSTRIES.map((industry, key) => (
                <span key={key}>{ industry.label }</span>
              ))
            }
          </CustomScrollPane>
        <span className="category-title">Verticals</span>
          <CustomScrollPane id="verticals">
            {
              VERTICALS.map((industry, key) => (
                <span key={key}>{ industry.label }</span>
              ))
            }
          </CustomScrollPane>
        <div className="campaigns-container">
          <span className="category-title">Campaigns</span>

          <div className="campaigns">
            <Tag>All</Tag>
            <Tag>Active</Tag>
            <Tag>InActive</Tag>
            <Tag>Expiring in 30 days</Tag>
            <Tag>Don't Expire</Tag>
            <Tag>All</Tag>
            <Tag>All</Tag>
          </div>
        </div>
      </div>

      <div className="currency-balance">
        <Card>
          <div className="body">
            <div className="graph">
              <CircularProgressbar
                value={10}
                minValue={0}
                maxValue={100}
                styles={{
                  width: 25,
                  heigh: 25,
                  path: {
                    stroke: 'rgba(255, 115, 115, 100)',
                    strokeLinecap: 'butt'
                  }
                }}
              />
            </div>
            <div className="balance">
              <span>Current Balance</span>

              <h3>$0</h3>

              <a href="/">Prepay</a>
            </div>
          </div>

          <span className="message">Low Credit Alert. Prepay Now</span>
        </Card>
      </div>
    </Card>
  )
}

export default Sidebar;
