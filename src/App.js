import React from 'react';
import './App.css';
import Cart from './components/Cart'

const App = React.createClass({
    getInitialState: function() {
        return {
            items: [
                {
                    title: 'Womens Zitah Pointed Toe Pumps',
                    qty: 1,
                    price: 50,
                    total: 50
                }, {
                    title: 'Womens Basel Booties',
                    qty: 1,
                    price: 150,
                    total: 150
                }, {
                    title: 'Jamie T-Strap Platform Dress Sandals',
                    qty: 2,
                    price: 50,
                    total: 100
                }
            ]
        };

    },
    handleChangeQty(changedItem, value) {
      var targetItem = this.state.items.find((item) => {
        return changedItem.title === item.title
      });
      targetItem.qty = value;
      targetItem.total = targetItem.qty * targetItem.price;

      this.setState({items: this.state.items});
    },

    handleRemove(title) {
      var newItems = this.state.items.filter((item) => {
        return item.title !== title
      })
      this.setState({items: newItems});
    },

    render() {
        return (
            <div className="App">
                <h2>Shopping Card App</h2>
                <Cart items={this.state.items} handleChangeQty={this.handleChangeQty}
                  handleRemove={this.handleRemove} />
            </div>
        );
    },
});

export default App;
