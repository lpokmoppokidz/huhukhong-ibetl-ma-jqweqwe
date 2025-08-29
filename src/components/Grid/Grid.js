import React from 'react';
import './style/Grid.scss';

const Grid = ({ 
  data = [], 
  renderItem,
  columns = 4,
  gap = '1rem',
  className = '',
  itemClassName = ''
}) => {
  // Default render function if none provided
  const defaultRenderItem = (item, index) => (
    <div key={index} className={`grid-item ${itemClassName}`}>
      {typeof item === 'object' ? JSON.stringify(item) : String(item)}
    </div>
  );

  // Use provided render function or default
  const itemRenderer = renderItem || defaultRenderItem;

  // Grid styles
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap
  };

  return (
    <div className={`grid ${className}`} style={gridStyle}>
      {data.map((item, index) => itemRenderer(item, index))}
    </div>
  );
};

export default Grid;