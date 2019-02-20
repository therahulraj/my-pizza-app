import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const toppings = [];

  for (let toppingName in props.toppings) {
    toppings.push({
      name: toppingName,
      amount: props.toppings[toppingName]
    })
  }

  const toppingOutput = toppings.map(ig => {
    return <span key={ig.na}>{ig.name} ({ig.amount})</span>
  })
  return (
    <div className={classes.Order}>
    <p>Toppings: {toppingOutput}</p>
    <p>Price: INR {Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
  )

};

export default order;
