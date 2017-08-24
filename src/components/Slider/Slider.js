import React, { Component } from 'react';
import adImg from '../../imgs/ad.jpg';
import './Slider.css'; 

class List extends Component{
	render(){
		return (
			<div>
				<div className="app-slider">
					<img className="ad-photo" src={adImg} alt=""/>
				</div>
			</div>
		);
	}
}

module.exports = List;