import { Card } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Widget({
  title,
  description,
  positive = false,
  percent = '00.00',
  value = '00.00'
}) {
  return (
    <Card className="widget">
      <span className="widget-title">
        { title }
        <div className="pmNA">NA</div>
      </span>


      <div className="widget-body">
        <span className="value">
          <span className={positive ? 'positive' : 'negative'}>{ percent }%</span>
            |
          <span>${ value }</span>
        </span>

        <div>
          <FontAwesomeIcon
            className={positive ? 'positive' : 'negative'}
            icon={positive ? 'arrow-alt-circle-up' : 'arrow-alt-circle-down'}
            size="2x"
          />
        </div>
      </div>

      <span className="widget-description">
        { description }
      </span>
    </Card>
  )
}

export default Widget;
