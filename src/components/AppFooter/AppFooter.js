import React, { Component } from 'react';
import './AppFooter.css';

class AppFooter extends Component{
	render(){
		return (
			<div className="app-footer">
				<a href="#" className="footer-item">
					<span className="icon icomoon icon-kitchen"></span>
					<span className="text">首页</span>
				</a>
				<a href="#" className="footer-item">
					<span className="icon icomoon icon-shopcar"></span>
					<span className="text">购物车</span>
				</a>
				<a href="#" className="footer-item">
					<span className="icon icomoon icon-list"></span>
					<span className="text">订单</span>
				</a>
				<a href="#" className="footer-item">
					<span className="icon icomoon icon-my"></span>
					<span className="text">我的</span>
				</a>
			</div>
		);
	}
}

export default AppFooter;