import React from 'react';

export default (props) => {
  // const { child, props... } = props;
  switch (props.className) {
    case 'gradient-diagonal':
    case 'gradient-horizontal':
      return <button { ...props }><div className="overlay">{ props.children }</div></button>
    default:
      return <button { ...props }>{ props.children }</button>
  }
}