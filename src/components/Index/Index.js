import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import ProductCategory from '../ProductCategory/ProductCategory';
import GoodItem from '../GoodItem/GoodItem';
import './Index.css';

class Index extends Component{ 
	render(){
		return (
			<div className="bg-light">
				<Slider></Slider>
				<ProductCategory></ProductCategory>
				<GoodItem></GoodItem>
			</div>
		);
	}
}

module.exports = Index;