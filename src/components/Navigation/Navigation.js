import React from 'react';

import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Auxilliary/Auxilliary';

const navigation = ( props ) => {
  return (
    <Aux>
      <NavLink to="/">Pizza Builder</NavLink>
      <NavLink
      to="/orders" exact
      // activeClassName={classes.active}
      >My Orders</NavLink>
      {props.children}
    </Aux>
  )
}

export default navigation;
