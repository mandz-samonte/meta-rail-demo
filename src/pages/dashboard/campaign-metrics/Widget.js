import { Card } from '../../../components';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Widget({
  title,
  positive = false,
  percent = '00.00',
  value = '00.00'
}) {
  return (
    <Card className={classNames('widget', { 'bottom-border-positive': positive, 'bottom-border-negative': !positive })}>
      <div className="widget-title">
        <span>{ title }</span>

        <span className={ positive ? 'positive' : 'negative' }>
          <FontAwesomeIcon icon={ positive ? 'chevron-up' : 'chevron-down' } />
          { percent }%
        </span>
      </div>

      <div className="widget-body">
        <FontAwesomeIcon
          className={ positive ? 'positive' : 'negative'}
          icon={ positive ? 'chevron-up' : 'chevron-down' }
        />
        ${ value }
      </div>
    </Card>
  )
}

export default Widget;
