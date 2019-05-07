import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const DecimalButton = props => (
  <button
    className="btn btn-light"
    style={buttonStyle}
    onClick={props.handleDecimalOnClick}
  >.</button>
)