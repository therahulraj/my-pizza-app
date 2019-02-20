import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';


class Checkout extends Component {
  state = {
    size: 'medium',
    toppings: null,
    price: 0
  }

componentWillMount () {
  const query = new URLSearchParams(this.props.location.search);
  console.log(query.entries());
  const toppings = {};
  let price = 0;
  for (let param of query.entries()) {
    if (param[0] == 'price') {
      price = +param[1];
   } else {
      toppings[param[0]] = +param[1];
    }
  }
  this.setState({toppings: toppings, price: price});
}


componentDidUpdate () {
  // console.log('fuck me');
  // const query = new URLSearchParams(this.props.location.search);
  // const toppings = {
  //   pepperoni: 1,
  //   sausage: 1,
  //   mushroom: 0,
  //   grilledChicken: 1
  // };
  // for (let param of query.entries()) {
  //   toppings[param[0]] = +param[1];
  // }
  // this.setState({toppings: toppings});
}

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  render () {
    return (
      <div>
         <CheckoutSummary
          toppings={this.state.toppings}
          pizzaOriginalSize={this.state.size}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
          <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData toppings={this.state.toppings} price={this.state.price} {...props}/>)}
          />
      </div>
    )
  }
}

export default Checkout;
