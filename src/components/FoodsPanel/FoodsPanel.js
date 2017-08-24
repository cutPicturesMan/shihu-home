import React, { Component } from 'react';
import CartHandle from '../CartHandle/CartHandle';
import CartMini from '../CartMini/CartMini';
import MerchantComments from '../MerchantComments/MerchantComments';
import logo from '../../imgs/m.jpg'; 
import './FoodsPanel.css';  

class FoodsPanel extends Component{
	render(){
		return (
			<div>
				<div className="foods-panel">
					<div className="panel-nav">
						<div className="nav-item">饮料</div>
						<div className="nav-item active">饮料</div>
						<div className="nav-item">饮料</div>
						<div className="nav-item">饮料</div>
						<div className="nav-item">饮料</div>
						<div className="nav-item">饮料</div>
						<div className="nav-item">饮料</div>
						<div className="nav-item">饮料</div>
					</div>
					<div className="panel-lists">
						<section className="foods-category">
							<h3 className="category-title">饮料</h3>
							<div className="category-list bb-gray">
								<div className="good-item bb-gray">
									<figure className="good-item-avator mr20">
										<img src={logo} alt="" className="img"/>
									</figure>
									<section className="good-item-detail">
										<div className="title">汉堡</div> 
										<div className="text mt15">
											美味汉堡快来品尝
										</div>	
										<div className="text mt15">
											月售1004份
											<strong className="text-energized">4.3</strong>
										</div>
										<p className="mt15">
											<span className="discount-price text-assertive mr15">
												<small>￥</small><strong>10</strong>
											</span> 
											<del className="old-price">
												<small>￥</small><strong>10</strong>
											</del>
										</p>
										<CartHandle></CartHandle>
									</section>
								</div>
								<div className="good-item bb-gray">
									<figure className="good-item-avator mr20">
										<img src={logo} alt="" className="img"/>
									</figure>
									<section className="good-item-detail">
										<div className="title">汉堡</div> 
										<div className="text mt15">
											美味汉堡快来品尝
										</div>	
										<div className="text mt15">
											月售1004份
											<strong className="text-energized">4.3</strong>
										</div>
										<p className="mt15">
											<span className="discount-price text-assertive mr15">
												<small>￥</small><strong>10</strong>
											</span> 
											<del className="old-price">
												<small>￥</small><strong>10</strong>
											</del>
										</p>
										<CartHandle></CartHandle>
									</section>
								</div>
								<div className="good-item bb-gray">
									<figure className="good-item-avator mr20">
										<img src={logo} alt="" className="img"/>
									</figure>
									<section className="good-item-detail">
										<div className="title">汉堡</div> 
										<div className="text mt15">
											美味汉堡快来品尝
										</div>	
										<div className="text mt15">
											月售1004份
											<strong className="text-energized">4.3</strong>
										</div>
										<p className="mt15">
											<span className="discount-price text-assertive mr15">
												<small>￥</small><strong>10</strong>
											</span> 
											<del className="old-price">
												<small>￥</small><strong>10</strong>
											</del>
										</p>
										<CartHandle></CartHandle>
									</section>
								</div>
							</div>
						</section>
					</div>
					<CartMini></CartMini>
				</div>
				<MerchantComments></MerchantComments>
			</div>
		);
	}
}

module.exports = FoodsPanel;