import React from 'react';
import './App.css';
import Cart from './components/Cart'


const App = React.createClass( {
	getInitialState: function(){
	return { items: [{
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
					  },]};

	},
  render() {
    return (
      <div className="App">
        <h2>Shopping Card App</h2>
        <Cart items={this.state.items} onChange={this.handleChange} onUpdate={this.handleUpdate}/>
      </div>
    );
  },
  handleChange:function(item,value){
  	var allItems = this.state.items.filter(function(element){
  		if(element.title==item.title){
  			element.qty = value;
  		}
  		return element;
  	});
  	this.setState({items: allItems});
  },
  handleUpdate:function(){

  },
});

export default App;
