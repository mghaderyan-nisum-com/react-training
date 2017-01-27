import React from 'react';
import CartList from './CartList'

const Cart = React.createClass( {
  render() {
    return (
      <div className="cart">
        <CartList items={this.props.items} />
        <div className="actions-container">
          <button>Update Cart</button>
          <button>Contionue Shopping</button>
        </div>
      </div>
    );
  }
});

export default Cart;
