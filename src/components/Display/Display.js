import React from 'react';

const displayStyles = {
  container: {
    border: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    borderStyle: 'solid',
    overflow: 'hidden',
    padding: 10,
    textAlign: 'right',
    width: '100%',
  },
  currentValue: {
    fontSize: '2rem',
  }
}

export const Display = props => (
  <div style={displayStyles.container}>
    <div><small>{props.currentResult}</small></div>
    <div style={displayStyles.currentValue}>{props.entries.length === 0 ? props.currentValue : `${props.entries.join(' ')} ${props.currentValue}`}</div>
  </div>
)