import React, { Component } from 'react';
import Stars from '../Stars/Stars';
import logo from '../../imgs/m.jpg';
import './MerchantHeader.css'; 

class MerchantHeader extends Component{
	render(){
		return (
			<div className="merchant-header">
				<div className="header-bg" style={{backgroundImage:'url('+logo+')'}}></div>
				<div className="good-item">
					<figure className="good-item-avator mr30">
						<img src={logo} alt="" className="img"/>
					</figure> 
					<section className="good-item-detail pr40">
						<div className="title">
							<h3 className="l h3">
								<span className="brand-badge vat mr10"></span>
								麦当劳
							</h3>
						</div> 
						<p className="mt15">蜂鸟专送/38分钟送达</p>
						<div className="action-line mt20">
							<span className="action-badge decrease vam mr10"></span>
							<span className="action-text vam">在线支付满28减5</span>
						</div>
						<div className="action-link">5个 <small className="icomoon icon-arrow-right"></small></div>
					</section>
				</div>
				<div className="merchant-ad">
					<div className="ad-badge"></div>
					<div className="ad-text">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
					<div className="ad-icon">
						<small className="icomoon icon-arrow-right"></small>
					</div>
				</div>
				<div className="merchant-ad-alert hide"> 
					<div className="ad-alert-bg"></div>
					<div className="ad-alert-container">
						<h3 className="h3">麦当劳</h3>
						<Stars></Stars>
						<div className="title-decorate">
							<span className="line"></span>
							<strong className="text">优惠信息</strong>
							<span className="line"></span>
						</div>
						<div className="coupon-list">
							<div className="action-line mt20">
								<span className="action-badge decrease vat mr10"></span>
								<span className="action-text">在线支付满28减5</span>
							</div>
							<div className="action-line mt20">
								<span className="action-badge discount vat mr10"></span>
								<span className="action-text">VC无限橙果汁全场8折</span>
							</div>
							<div className="action-line mt20">
								<span className="action-badge special vat mr10"></span>
								<span className="action-text">单人精彩套餐</span>
							</div>
							<div className="action-line mt20">
								<span className="action-badge invoice vat mr10"></span>
								<span className="action-text">该商家支持发票,请下单写好发票抬头</span>
							</div>
							<div className="action-line mt20">
								<span className="action-badge guarantee vat mr10"></span>
								<span className="action-text">已加入“外卖保”计划,食品安全保障</span>
							</div>
						</div>
						<div className="title-decorate">
							<span className="line"></span>
							<strong className="text">商家公告</strong>
							<span className="line"></span>
						</div>
						<div className="merchant-notice">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</div>
						<div className="close">
							<span className="icon icomoon icon-close"></span>
						</div>
					</div>
				</div>
				<span className="collection icomoon icon-collect-fill active"></span>
			</div>
		);
	}
}

module.exports = MerchantHeader;