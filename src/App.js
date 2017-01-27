import React from 'react';
import './App.css';
import Cart from './components/Cart'

var items = [
  {
    title: 'Womens Zitah Pointed Toe Pumps',
    qty: 1,
    total: 50,
  },
  {
    title: 'Womens Basel Booties',
    qty: 1,
    total: 150,
  },
  {
    title: 'Jamie T-Strap Platform Dress Sandals',
    qty: 2,
    total: 100,
  },
];

const App = React.createClass( {
  render() {
    return (
      <div className="App">
        <h2>Shopping Card App</h2>
        <Cart items={items}/>
      </div>
    );
  }
});

export default App;
