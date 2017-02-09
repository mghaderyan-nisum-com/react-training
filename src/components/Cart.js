import React from 'react';
import CartList from './CartList'

const Cart = React.createClass( {
  render() {
    return (
      <div className="cart">
        <CartList items={this.props.items} onChange={this.handleChange} />
        <div className="actions-container">
          <button onClick={this.handleUpdate}>Update Cart</button>
          <button>Contionue Shopping</button>
        </div>
      </div>
    );
  },
  handleChange: function(item,value){
     this.props.onChange(item,value);
  },
  handleUpdate: function(){
    this.props.onUpdate();
  }

});

export default Cart;
