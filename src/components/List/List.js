import React, { Component } from 'react';
import logo from '../../imgs/m.jpg';
import './List.css'; 

class List extends Component{
	render(){
		return (
			<div>
				<div className="list-top">
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
					<div className="sort-panel cutting-line">
						<div className="sort-item">全部订单<span className="icon icomoon icon-arrow-down-fill"></span></div>
						<div className="sort-item">待评价</div> 
					</div>
				</div>

				<div className="each-list mt20">
					<div className="label-act underline large mt20">
						<a href="#" className="label-act-link">
							<span className="act-icon mr10">
								<img src={logo} alt="" className="icon"/>
							</span>
							<span className="act-title">
								<span className="p fs30">
									德克士
									<span className="act-arrow icomoon icon-arrow-right vam"></span>
								</span>
								<span className="p mt10">2017/05/06 20:23</span>
							</span>
							<span className="act-sub">订单已完成</span>
						</a>
					</div>
					<div className="each-list-detail bb-gray">
						<div className="detail-line mb10">
							<div className="title">肥牛饭</div>
							<div className="num">x1</div>
						</div>
						<div className="detail-line mb10">
							<div className="title">香菇牛肉饭</div>
							<div className="num">x1</div>
						</div>
						<div className="detail-line">
							<div className="title"></div>
							<div className="num">共2件商品，总共<strong>￥10.00</strong>元</div>
						</div>
					</div>
					<div className="p25 tar"> 
						<span className="app-btn mini ml20">查看订单</span>  
						<span className="app-btn mini ml20 app-btn-energized">评价</span>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = List;