import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function CustomScrollPane({
  children,
  className,
  id = 'scroll-pane-container',
}) {
  const [value, setValue] = useState('');
  const [container, setContainer] = useState('');

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
    var container = document.getElementById(`${id}-container`);
    var panel = document.getElementById(id);
    var input = document.getElementById(`${id}-scrollbar-input`);

    input.style.width = `${container.offsetHeight}px`;
    input.style.right = `-${Math.abs(container.offsetHeight / 2 - 25)}px`;

    panel.addEventListener('scroll', scroll);

    setContainer(container);
    setValue(panel.scrollTop);
  }, [children]);

  return (
    <div id={`${id}-container`} className={classNames('custom-scroll-pane', className)}>
      <div id={id} className="scroll-pane-container">
        { children }
      </div>

      <input
        id={`${id}-scrollbar-input`}
        onChange={onChange}
        value={value}
        className="custom-scrollbar"
        type="range"
      />
    </div>
  )
}

export default CustomScrollPane;
