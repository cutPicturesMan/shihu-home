import React, { Component } from 'react';
import MemberInfo from '../MemberInfo/MemberInfo';
import LabelAct from '../LabelAct/LabelAct';
import MemberList from '../MemberList/MemberList';

class Member extends Component{ 
	render(){
		return (
			<div>
				<MemberInfo></MemberInfo>
				<MemberList></MemberList>
				<LabelAct></LabelAct>
			</div>

		);
	}
}

module.exports = Member;