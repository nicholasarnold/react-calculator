import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const ClearButton = props => (
  <button
    className="btn btn-dark"
    style={buttonStyle}
    onClick={() => props.handleClearEntryOnClick()}
  >CE</button>
)