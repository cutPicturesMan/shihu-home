import React, { Component } from 'react';
import './ProductCategory.css'; 

class ProductCategory extends Component{
	render(){
		return (
			<div className="product-category app-grid bb-gray">
				<a className="category-tab col-4" href="#">
					<span className="icon bg-energized-light icomoon icon-food"></span>
					<span className="text">正餐优选</span>
				</a>
				<a className="category-tab col-4" href="#">
					<span className="icon bg-energized icomoon icon-hamburger"></span>
					<span className="text">汉堡薯条</span>
				</a>
				<a className="category-tab col-4" href="#">
					<span className="icon bg-primary icomoon icon-noodle"></span>
					<span className="text">粥粉面</span>
				</a>
				<a className="category-tab col-4" href="#">
					<span className="icon bg-romance icomoon icon-drink"></span>
					<span className="text">甜品饮料</span>
				</a>
			</div>
		);
	}
}

module.exports = ProductCategory;