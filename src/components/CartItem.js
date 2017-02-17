import React from 'react';
import './CartItem.css'

const CartItem = React.createClass( {
  render() {
    console.log("rendering item");
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
  },

  shouldComponentUpdate: function(nextProps,nextState){
    if(this.props.item.qty!==nextProps.item.qty){
      console.log("shouldComponentUpdate is true, updating cartItem");
      return true;
    }
    console.log("shouldComponentUpdate is false");
    return false;
  },
  componentWillUpdate: function(nextProps,nextState){
    console.log("componentWillUpdate");
  },
  componentDidUpdate:function(){
    console.log("componentDidUpdate");
  }

});

export default CartItem;
