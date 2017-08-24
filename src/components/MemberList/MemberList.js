import React, { Component } from 'react';
import './MemberList.css'; 

class MemberList extends Component{
	render(){
		return (
			<div className="member-list mt20">
				<div className="member-list-tabs">
					<a href="#" className="tabs-item">
						<span className="icon icomoon icon-all-list"></span>
						<span className="p mt10 tac">全部订单</span>
					</a>
					<a href="#" className="tabs-item">
						<span className="icon icomoon icon-comment"></span>
						<span className="p mt10 tac"> 待评价</span>
					</a>
				</div>
			</div>
		);
	}
}

module.exports = MemberList;