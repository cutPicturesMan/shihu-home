import React, { Component } from 'react';
import MerchantHeader from '../MerchantHeader/MerchantHeader';
import FoodsPanel from '../FoodsPanel/FoodsPanel';
import FoodDetail from '../FoodDetail/FoodDetail';        // 菜品详情页

class Merchant extends Component{ 
	render(){
		return (
			<div className="bg-light">
      			<MerchantHeader></MerchantHeader>
      			<div className="sort-panel">
      				<div className="sort-item">商品</div>
      				<div className="sort-item">评价</div> 
      			</div>
				<FoodsPanel></FoodsPanel>
        		<FoodDetail></FoodDetail>
			</div>
		);
	}
}

module.exports = Merchant;