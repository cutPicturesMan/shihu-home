import React, { Component } from 'react';
import './CartHandle.css'; 

class CartHandle extends Component{
	render(){
		return (
			<div className="cart-handle">
				<div className="cart-reduce">
					<span className="icon icomoon icon-reduce"></span>
				</div>
				<div className="cart-num">123</div>
				<div className="cart-add">	
					<span className="icon icomoon icon-add"></span>
				</div>
			</div>
		);
	}
}

module.exports = CartHandle;