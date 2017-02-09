import React from 'react';
import './CartItem.css'

const CartItem = React.createClass( {
  render() {
    const item = this.props.item;
    return (
      <div className="cart-item">
        <label>{item.title}</label>
        <input type="text" value={this.props.item.qty} onChange={this.changeQty} />
        <label>{item.total }</label>
        <button onClick={this.removeItem}>Remove</button>
      </div>
    );
  },
  changeQty : function(e){
    this.props.onChange(this.props.item,e.target.value);
    console.log("props are"+this.props);
 },
  removeItem: function(){
    this.props.onRemove(this.props.item);
  }

});

export default CartItem;
