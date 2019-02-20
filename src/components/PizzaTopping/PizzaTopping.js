import React from 'react';

import classes from './PizzaTopping.css';

const pizzaTopping = (props) => <div className={classes.Ingredients}>{props.type}</div>

export default pizzaTopping;
