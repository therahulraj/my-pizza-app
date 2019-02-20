import React, {
  Component
} from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from './hoc/Auxilliary/Auxilliary';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Navigation from './components/Navigation/Navigation';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
      <Navigation >
      <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/" component={PizzaBuilder} />
      </Switch>
      </Navigation >
      </Aux>
    );
  }
}

export default App;
