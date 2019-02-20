import React from 'react';

import classes from './CheckoutSummary.css';

import Pizza from '../Pizza/Pizza';

const checkoutSummary = ( props ) => {
  return (
    <div className={classes.CheckoutSummary}>
     <h1>We hope it tastes well!</h1>

    <div style={{
      width: '300px', height: '300px', margin: 'auto'
    }}>
    <Pizza toppings={props.toppings} pizzaSize={props.pizzaOriginalSize}/>
    </div>
    <button onClick={props.checkoutCancelled}>CANCEL</button>
    <button onClick={props.checkoutContinued}>CONTINUE</button>

    </div>
  )
}


export default checkoutSummary;
