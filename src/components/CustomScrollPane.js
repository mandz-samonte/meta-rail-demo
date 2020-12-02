import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function CustomScrollPane({
  children,
  className,
  id = 'scroll-pane-container',
}) {
  const [value, setValue] = useState('');

  function onChange(e) {
    setValue(e.target.value);

    var panel = document.getElementById(id);

    var total = panel.scrollHeight - panel.offsetHeight;

    var percentage = total * (e.target.value/100);

    panel.scrollTop = percentage;
  }

  function scroll() {
    var panel = document.getElementById(id);

    var scrollTop = panel.scrollTop;

    var total = panel.scrollHeight - panel.offsetHeight;

    var percentage = (scrollTop / total) * 100;

    setValue(percentage);
  }

  useEffect(() => {
    var panel = document.getElementById(id);

    panel.addEventListener('scroll', scroll);

    setValue(panel.scrollTop);
  }, []);

  return (
    <div className={classNames('custom-scroll-pane', className)}>
      <div id={id} className="scroll-pane-container">
        { children }
      </div>

      <input
        onChange={onChange}
        value={value}
        className="custom-scrollbar"
        type="range"
      />
    </div>
  )
}

export default CustomScrollPane;
