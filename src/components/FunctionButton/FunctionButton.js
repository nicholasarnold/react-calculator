import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const FunctionButton = props => (
  <button
    className="btn btn-secondary"
    style={buttonStyle}
    onClick={() => props.handleFunctionOnClick(props.value)}
  >{props.value}</button>
)