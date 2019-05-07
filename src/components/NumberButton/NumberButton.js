import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const NumberButton = props => (
  <button
    className="btn btn-light"
    style={buttonStyle}
    onClick={() => props.handleNumberOnClick(props.value)}
  >{props.value}</button>
)