import classNames from 'classnames';

function Card({
  children,
  className
}) {
  return (
    <div className={classNames('card', className)}>
      { children }
    </div>
  )
}

export default Card;
