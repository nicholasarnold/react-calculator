import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const AllClearButton = props => (
  <button
    className="btn btn-danger"
    style={buttonStyle}
    onClick={() => props.handleAllClearOnClick()}
  >AC</button>
)