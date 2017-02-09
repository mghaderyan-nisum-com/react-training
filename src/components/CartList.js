import React from 'react';
import CartItem from './CartItem'
import './CartList.css'

function getCartItemElements(items,props,that) {
  return items.map((item, index) => {
    return (
      <CartItem key={index} item={item} onChange={that.changeHandler} />
    )
  })
}
const CartList = React.createClass( {
  changeHandler: function(item,value){
    this.props.onChange(item,value);
  },
  render() {
    getCartItemElements.bind(this);
    return (
      <div className="cart-list">
        <ul className="cart-list__header">
          <li>Product</li>
          <li>Qty</li>
          <li>Total</li>
        </ul>
        <div className="items-container">
          {getCartItemElements(this.props.items,this.props,this)}
        </div>
      </div>
    );
  }

});

export default CartList;
