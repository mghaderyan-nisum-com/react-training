import React from 'react';
import './App.css';
import Cart from './components/Cart'


const App = React.createClass( {
	getInitialState: function(){
		console.log("getInitialState");
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
 componentWillMount: function(){
	 console.log("componentWillMount");
 },
  render() {
		console.log("render");
    this.manualUpdate();
    return (
      <div className="App">
        <h2>Shopping Card App</h2>
        <Cart items={this.state.items} onChange={this.handleChange} onUpdate={this.handleUpdate}/>
      </div>
    );
  },
	componentDidMount: function(){
		console.log("componentDidMount");
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
  manualUpdate:function(){
  function callback(){
      var allItems = [{
							    title: 'Womens Zitah Pointed Toe Pumps',
							    qty: 1,
							    total: 50,
							  },
							  {
							    title: 'Womens Basel Booties',
							    qty: 5,
							    total: 150,
							  },
							  {
							    title: 'Jamie T-Strap Platform Dress Sandals',
							    qty: 2,
							    total: 100,
							  }];


     this.setState({items: allItems});

    }
    setTimeout(callback.bind(this),3000);
  },
	shouldComponentUpdate: function(nextProps,nextState){
		if(this.state.items[1].qty!==nextState.items[1].qty){
			console.log("shouldComponentUpdate is true");
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
export default App;
