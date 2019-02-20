import React, { Component } from 'react';


import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/BuildControls/BuildControls';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const TOPPING_PRICES = {
  pepperoni: 20,
  sausage: 20,
  mushroom: 30,
  grilledChicken: 40
}
const PIZZA_SIZE_PRICE = {
  small: 80,
  medium: 110,
  large: 180
}

class PizzaBuilder extends Component {
  state = {
    size: 'medium',
    toppings: null,
    purchasable: false,
    totalPrice: 110,
    purchasing: false,
    loading: false,
    error: false
  }

componentDidMount () {
  axios.get('https://my-pizza-app-ef4f1.firebaseio.com/toppings.json')
           .then(response => {
             this.setState({toppings: response.data});
           })
           .catch(error => {
             this.setState({error: true});
           });
}

updatePurchasable = (toppings) => {
  const sum = Object.keys(toppings)
              .map(topping => {
                return toppings[topping]
              })
              .reduce((s, i) => s + i, 0);
              this.setState({purchasable: sum > 0})
}

addToppingHandler = (type) => {
  const oldCount = this.state.toppings[type];
  const updatedCount = oldCount + 1;
  const updatedToppings = {
    ...this.state.toppings
  };
  updatedToppings[type] = updatedCount;
  const updatedPrice = this.state.totalPrice +  TOPPING_PRICES[type];
  this.setState({toppings: updatedToppings, totalPrice: updatedPrice});
  this.updatePurchasable(updatedToppings);
}

removeToppingHandler = (type) => {
  const oldCount = this.state.toppings[type];
  let updatedCount = 0;
  if (oldCount > 0) {
    updatedCount = oldCount - 1;
  } else {
    updatedCount = 0;
  }
  const updatedToppings = {
    ...this.state.toppings
  };
  updatedToppings[type] = updatedCount;
  const updatedPrice = this.state.totalPrice -  TOPPING_PRICES[type];
  this.setState({toppings: updatedToppings, totalPrice: updatedPrice})
  this.updatePurchasable(updatedToppings);
}

sizeHandler = (type) => {
  const updatedPrice = this.state.totalPrice - PIZZA_SIZE_PRICE[this.state.size] + PIZZA_SIZE_PRICE[type];
  this.setState({size: type, totalPrice: updatedPrice});
}
purchaseHandler = () => {
  this.setState({purchasing: true})
}
purchaseContinueHandler = () => {
const queryParams = [];

 for (let key in this.state.toppings) {
   queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.state.toppings[key]))
 }
queryParams.push('price=' + this.state.totalPrice);
 const queryStrings = queryParams.join('&');

  this.props.history.push({
    pathname: '/checkout',
    search: '?' + queryStrings,
  });
}

purchaseCancelHandler = () => {
  this.setState({purchasing: false})
}

  render() {
    const disabledInfo = {
      ...this.state.toppings
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }


    let orderSummary = null;
    let burger =  this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />


    if (this.state.toppings) {
      burger = (
        <Aux>
        <Pizza
        toppings={this.state.toppings}
        pizzaSize={this.state.size} />
        <BuildControls
        toppings={this.state.toppings}
        addToppings={this.addToppingHandler}
        removeToppings={this.removeToppingHandler}
        purchasable={this.state.purchasable}
        disablingInfo={disabledInfo}
        totalPrice={this.state.totalPrice}
        sizeHandler={this.sizeHandler}
        orderContinued={this.purchaseHandler}
        />
        </Aux>
      )
      orderSummary = <OrderSummary toppings={this.state.toppings}
                    purchaseContinued={this.purchaseContinueHandler}
                    purchaseCancelled={this.purchaseCancelHandler}
                    price={this.state.totalPrice}
                    />;
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
      <Modal
      show={this.state.purchasing}
      modalClosed={this.purchaseCancelHandler}
      >
       {orderSummary}
      </Modal>
      {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(PizzaBuilder, axios);
