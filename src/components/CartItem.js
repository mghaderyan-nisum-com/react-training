import React from 'react';
import './CartItem.css'

const CartItem = React.createClass({
    changeQty: function(e) {
        this.props.handleChangeQty(this.props.item, e.target.value);
    },
    removeItem: function() {
        this.props.handleRemove(this.props.item.title);
    },
    render() {
        const item = this.props.item;
        return (
            <div className="cart-item">
                <label>{item.title}</label>
                <input type="text" value={this.props.item.qty} onChange={this.changeQty}/>
                <label>${item.total}</label>
                <button onClick={this.removeItem}>Remove</button>
            </div>
        );
    }

});

CartItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    handleChangeQty: React.PropTypes.func.isRequired,
    handleRemove:React.PropTypes.func.isRequired,
}

export default CartItem;
