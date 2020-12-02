import { Card } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DashboardCard({
  children,
  title,
  className,
  icons = []
}) {
  return (
    <Card className={className}>
      <div className="card-header">
        <span className="card-header-title">
          { title }
        </span>

        <div className="card-header-actions">
          {
            icons.map((icon, key) => (
              <FontAwesomeIcon
                className="card-header-icon"
                size="xs"
                icon={icon}
              />
            ))
          }
        </div>
      </div>

      {children}
    </Card>
  )
}

export default DashboardCard;
