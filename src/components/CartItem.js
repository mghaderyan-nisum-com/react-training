import React from 'react';
import './CartItem.css'

const CartItem = React.createClass( {
  render() {
    const item = this.props.item;
    return (
      <div className="cart-item">
        <label>{item.title}</label>
        <input type="text" value={item.qty} />
        <label>{item.total }</label>
        <button>Remove</button>
      </div>
    );
  }
});

export default CartItem;
