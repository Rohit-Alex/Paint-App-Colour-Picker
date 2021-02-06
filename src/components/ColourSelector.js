import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  return (
    <button className={config.classname} style={{background}} 
    onClick={() => selectNextBackground(background)} >{config.label}
    </button>
  )
}
export default ColourSelector;
