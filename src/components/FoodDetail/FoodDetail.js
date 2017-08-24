import React, { Component } from 'react';
import logo from '../../imgs/7.jpg';
import './FoodDetail.css'; 

class FoodDetail extends Component{
	render(){
		return (
			<div className="food-detail pb30">
				<div className="app-header">
					<div className="header-back">
						<a href="#" className="link"> 
							<span className="icon icomoon icon-arrow-left vam"></span>
							<small className="text">返回</small>
						</a>
					</div>
					<div className="header-title">标题标题标题标题标题标题标题标题</div>
					<div className="header-util">
						<span className="icon icomoon icon-search"></span>
						<small className="text">查找</small>
					</div>
				</div>
				<figure className="food-img">
					<img src={logo} alt="" className="img"/>
				</figure>
				<div className="food-summary bb-gray">
					<h3 className="title">皮蛋瘦肉粥</h3>
					<p className="sell mt15">
						<span className="mr20">月售1132份</span>
						<span>好评率100%</span>
					</p>
					<p className="mt35">
						<span className="discount-price text-assertive mr15">
							<small className="price-icon">￥</small><strong className="price-num">10</strong>
						</span>
						<del className="old-price">
							<small>￥</small><strong>10</strong>
						</del>
					</p>
					<div className="add-cart-badge">加入购物车</div>
				</div>
				<section className="food-intro bt-gray bb-gray mt30">
					<h3 className="intro-title">商品介绍</h3>
					<p className="p">一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。</p>
				</section>
			</div>
		);
	}
}

module.exports = FoodDetail;