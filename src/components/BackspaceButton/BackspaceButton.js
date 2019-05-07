import React from 'react';

const buttonStyle = {
  width: '100%'
}

export const BackspaceButton = props => (
  <button
    className="btn btn-dark"
    style={buttonStyle}
    onClick={() => props.handleBackspaceOnClick()}
  >&larr;</button>
)