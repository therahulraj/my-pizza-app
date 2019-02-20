import React from 'react';

const buildControl = (props) => {
  return (<div>
    <div>{props.label}</div>
    <button onClick={props.removed} disabled={props.disabled}>LESS</button>
    <button onClick={props.added}>MORE</button>
    </div>
  );
}

export default buildControl;
