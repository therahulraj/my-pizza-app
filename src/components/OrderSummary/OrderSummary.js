import React from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';

const orderSummary = (props) => {
  const toppingSummary = Object.keys(props.toppings)
        .map((igkey, i) => {
          return (
            <li key={igkey}>
            <span style={{textTransform: 'capitalize'}}>
            {igkey}
            </span>: {props.toppings[igkey]}
            </li>
          )
        })

        return (
          <Aux>
            <h3>YOUR ORDER</h3>
            <p>A delicious Pizza with following Ingredients: </p>
            <ul>
              {toppingSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <button onClick={props.purchaseCancelled}>CANCEL</button>
            <button onClick={props.purchaseContinued}>CONTINUE</button>
          </Aux>
        )
}

export default orderSummary;
