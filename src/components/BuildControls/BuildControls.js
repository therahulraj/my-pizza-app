import React from 'react';

import BuildControl from '../BuildControl/BuildControl';
import Aux from '../../hoc/Auxilliary/Auxilliary';
// import Button from '../UI/Button/Button';


// const controls = [
//   { label: 'salad', type: 'salad'},
//   { label: 'Bacon', type: 'bacon'},
//   { label: 'Cheese', type: 'cheese'},
//   { label: 'Meat', type: 'meat'},
// ];

const buildControls = (props) => {
  const toppings = Object.keys(props.toppings)
    .map((topping, i) => {
      return <BuildControl
              key={topping}
              label={topping}
              added={() => props.addToppings(topping)}
              removed={() => props.removeToppings(topping)}
              disabled={props.disablingInfo[topping]}
              />
    })
    return (
      <Aux>
      <p>The total Bill is of: {props.totalPrice}</p>
      <p>Choose your size</p>
      <button onClick={() => props.sizeHandler('small')}>SMALL</button>
      <button onClick={() => props.sizeHandler('medium')}>MEDIUM</button>
      <button onClick={() => props.sizeHandler('large')}>LARGE</button>
      {toppings}
      <BuildControl />
      <button
      disabled={!props.purchasable}
      onClick={props.orderContinued}
      >ORDER NOW</button>
      </Aux>
    )
}

export default buildControls;
