import React from 'react';

import classes from './Pizza.css';

import PizzaToppings from '../PizzaToppings/PizzaToppings';

const pizza = ( props ) => {
  let transformedIngredients = Object.keys(props.toppings)
  .map(igkey => {
    return [...Array(props.toppings[igkey])].map((_, i) => {
      return <PizzaToppings key={igkey + i} type={igkey} />
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding toppings!</p>
  }

 return (
   <div>
    {transformedIngredients}
    <PizzaToppings type={props.pizzaSize} />
    </div>
 );

}

export default pizza;
