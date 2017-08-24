import React, { Component } from 'react';
import CartHandle from '../CartHandle/CartHandle';
import './CartMini.css';  

class CartMini extends Component{
	render(){
		return (
			<div className="cart-mini active show">
				<div className="mini-count">
					<span className="icon icomoon icon-cart"></span>
					<span className="badge bg-assertive">1</span> 
				</div>
				<div className="mini-calc">
					<strong className="price">￥12</strong>
					<span className="line"></span>
					<span className="send">123</span>
				</div>
				<div className="mini-confirm">还差￥4元</div>

				<div className="mini-list hide">
					<div className="list-title">
						<h3>购物车</h3>
						<span className="clear text-energized-light">清空购物车</span>
					</div>
					<div className="list-detail pb50">
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
						<div className="item">
							<div className="name">莲子核桃黑米粥</div>
							<div className="price text-assertive"><small>￥</small><strong>10</strong></div>
							<div className="operation">
								<CartHandle></CartHandle>
							</div>
						</div>
					</div>
				</div>
				<div className="mini-bg hide"></div>
			</div>
		);
	}
}

module.exports = CartMini;