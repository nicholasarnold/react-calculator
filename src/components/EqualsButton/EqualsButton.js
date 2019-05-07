import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const EqualsButton = props => (
  <button
    className="btn btn-primary"
    style={buttonStyle}
    onClick={props.handleEqualsOnClick}
  > =</button>
)