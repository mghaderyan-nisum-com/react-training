import React from 'react';
import CartList from './CartList'

const Cart = React.createClass({
    handleUpdate: function() {
        // this.props.onUpdate();
    },
    render() {
        return (
            <div className="cart">
                <CartList items={this.props.items} handleChangeQty={this.props.handleChangeQty} handleRemove={this.props.handleRemove} />
                <div className="actions-container">
                    <button onClick={this.handleUpdate}>Update Cart</button>
                    <button>Contionue Shopping</button>
                </div>
            </div>
        );
    }
});

Cart.PropTypes = {
    items: React.PropTypes.array.isRequired,
    handleChangeQty: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
}

export default Cart;
