import React from 'react';
import CartItem from './CartItem'
import './CartList.css'

function getCartItemElements(items, handleChangeQty, handleRemove) {
    return items.map((item, index) => {
        return (
          <CartItem key={index} item={item} handleChangeQty={handleChangeQty} handleRemove={handleRemove} />
        )
    })
}

const CartList = React.createClass({
    render() {
        return (
            <div className="cart-list">
                <ul className="cart-list__header">
                    <li>Product</li>
                    <li>Qty</li>
                    <li>Total</li>
                </ul>
                <div className="items-container">
                    {getCartItemElements(this.props.items, this.props.handleChangeQty, this.props.handleRemove)}
                </div>
            </div>
        );
    }
});

CartList.propTypes = {
    items: React.PropTypes.array.isRequired,
    handleChangeQty: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
}

export default CartList;
