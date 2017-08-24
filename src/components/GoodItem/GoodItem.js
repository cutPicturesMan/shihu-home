import React, { Component } from 'react';
import logo from '../../imgs/m.jpg';

class GoodItem extends Component{
	render(){
		return (
			<div>
				<a href="#" className="good-item bb-gray">
					<figure className="good-item-avator mr30">
						<img src={logo} alt="" className="img"/>
					</figure>
					<section className="good-item-detail">
						<div className="sub-text title">
							<h3 className="l h3">
								<span className="brand-badge vat mr10"></span>
								麦当劳
							</h3>
							<span>¥20</span>
						</div> 
						<div className="sub-text text mt15">
							<div className="l">
								<span className="icomoon icon-star-fill"></span>
								<span className="icomoon icon-star-fill"></span>
								<span className="icomoon icon-star-fill"></span>
								<span className="icomoon icon-star-fill"></span>
								<span className="icomoon icon-star-fill"></span>
								<strong className="text-energized">4.3</strong>
							</div>
							<div className="r">月售430单</div>
						</div>
						<div className="text mt15">距离10km / 平均42分钟送达</div>
						<div className="pt15 mt30 bt-gray">
							<p className="mt10">
								<span className="action-badge bg-energized mr5">减</span>在线支付满20元减5元
							</p>
							<p className="mt10">
								<span className="action-badge bg-assertive mr5">首</span>新用户首单减免3元
							</p>
						</div>
					</section>
				</a>
			</div>
		);
	}
}

module.exports = GoodItem;