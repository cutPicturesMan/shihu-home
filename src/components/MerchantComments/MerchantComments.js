import React, { Component } from 'react';
import logo from '../../imgs/7.jpg';
import Stars from '../Stars/Stars';
import './MerchantComments.css'; 

class MerchantComments extends Component{
	render(){
		return (
			<div className="merchant-comments">
				<div className="comments-grade">
					<div className="grade-total">
						<div className="num">3.9</div>
						<p className="p">综合评分</p>
					</div>
					<div className="grade-stars">
						<div className="item">
							<span className="mr20">菜品质量</span>
							<Stars></Stars>
							<span className="ml20 text-energized">4.5</span>  
						</div>
						<div className="item mt15">
							<span className="mr20">服务态度</span>
							<Stars></Stars>
							<span className="ml20 text-energized">3.9</span>
						</div>
						<div className="item mt15">
							<span className="mr20">配送速度</span>
							<Stars></Stars>
							<span className="ml20 text-energized">5.0</span>
						</div>
					</div>
				</div>
				<div className="comments-wrapper">
					<div className="comments-tabs bb-gray">
						<a href="#" className="tab-item active">全部<small>57</small></a>
						<a href="#" className="tab-item">满意<small>47</small></a>
						<a href="#" className="tab-item unsatify">不满意<small>47</small></a>
					</div>
					<div className="comments-list">
						<div className="comments-item bb-gray">
							<div className="user-avator">
								<img src={logo} alt="" className="img"/>
							</div>
							<div className="comments-detail">
								<div className="title">
									<span className="name">我的</span>
									<span className="time">2017-05-09</span>
								</div>
								<div className="sell">
									<Stars></Stars>
									<span>80分钟送达</span>
								</div>
								<div className="text">
									味道不错，就是有点儿咸，有待进一步优化味道不错，就是有点儿咸，有待进一步优化味道不错，就是有点儿咸，有待进一步优化味道不错，就是有点儿咸，有待进一步优化味道不错，就是有点儿咸，有待进一步优化
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = MerchantComments;