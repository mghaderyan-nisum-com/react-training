import React from 'react';
import CartItem from './CartItem'
import './CartList.css'

function getCartItemElements(items) {
  return items.map((item, index) => {
    return (
      <CartItem key={index} item={item} />
    )
  })
}

const CartList = React.createClass( {
  render() {
    return (
      <div className="cart-list">
        <ul className="cart-list__header">
          <li>Product</li>
          <li>Qty</li>
          <li>Total</li>
        </ul>
        <div className="items-container">
          {getCartItemElements(this.props.items)}
        </div>
      </div>
    );
  }
});

export default CartList;
