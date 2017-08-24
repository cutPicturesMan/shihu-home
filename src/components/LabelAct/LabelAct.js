import React, { Component } from 'react';
import './LabelAct.css'; 

class LabelAct extends Component{
	render(){
		return (
			<div className="bt bb-gray">
				<div className="label-act underline mt20">
					<a href="#" className="label-act-link">
						<span className="act-icon mr10">
							<span className="icon icon-collect bg-primary"></span>
						</span>
						<span className="act-title">我的收藏</span>
						<span className="act-arrow icomoon icon-arrow-right"></span>
					</a>
				</div>
				<div className="label-act underline">
					<a href="#" className="label-act-link">
						<span className="act-icon mr10">
							<span className="icon icon-location bg-energized-light"></span>
						</span>
						<span className="act-title">收货地址</span>
						<span className="act-arrow icomoon icon-arrow-right"></span>
					</a>
				</div>
				<div className="label-act underline">
					<a href="#" className="label-act-link">
						<span className="act-icon mr10">
							<span className="icon icon-help bg-energized"></span>
						</span>
						<span className="act-title">个人说明</span>
						<span className="act-sub mr10">查看</span>
						<span className="act-arrow icomoon icon-arrow-right"></span>
					</a>
				</div>
				<div className="label-act">
					<a href="#" className="label-act-link">
						<span className="act-icon mr10">
							<span className="icon icon-customer bg-romance"></span>
						</span>
						<span className="act-title">联系我</span>
						<span className="act-sub mr10"></span>
						<span className="act-arrow icomoon icon-arrow-right"></span>
					</a>
				</div>
			</div>
		);
	}
}

module.exports = LabelAct;