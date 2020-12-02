import classNames from 'classnames';

function Tag({
  children,
  className
}) {
  return (
    <div className={classNames('tag', className)}>
      { children }
    </div>
  )
}

export default Tag;
