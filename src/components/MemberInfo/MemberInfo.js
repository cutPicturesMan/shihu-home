import React, { Component } from 'react';
import avatar from '../../imgs/shopcar.png';
import './MemberInfo.css'; 

class MemberInfo extends Component{
	render(){
		return (
			<div className="member-info">
				<a href="#" className="member-setting icomoon icon-setting"></a>
				<div className="member-info-avatar">
					<img src={avatar} alt=""/>
				</div>
				<p className="p mt30"><a href="#">注册</a>    |   <a href="#">登录</a></p>
			</div>
		);
	}
}

module.exports = MemberInfo;