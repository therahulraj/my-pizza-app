import React, { Component } from 'react';

// import classes from './PizzaIngredients.css'

import PizzaTopping from '../PizzaTopping/PizzaTopping';

class PizzaToppings extends Component {
  render() {

    let topping = null;

    switch(this.props.type) {
      case('medium'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('small'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('large'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('pepperoni'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('sausage'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('mushroom'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      case('grilledChicken'):
      topping = <PizzaTopping type={this.props.type} />
      break;
      default:
      topping = null;
    }
    return topping;
  }
}

export default PizzaToppings;
