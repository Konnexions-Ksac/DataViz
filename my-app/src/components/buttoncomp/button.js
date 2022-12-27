import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} className="p-2">
      {props.text}
    </button>
  );
}

export default Button;