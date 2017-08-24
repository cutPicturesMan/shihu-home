import React, { Component } from 'react';
import './Stars.css'; 

class Stars extends Component{
	render(){
		return (
			<div className="stars-panel">
				<div className="stars-item">
					<div className="back-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
					<div className="front-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
				</div>
				<div className="stars-item">
					<div className="back-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
					<div className="front-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
				</div>
				<div className="stars-item">
					<div className="back-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
					<div className="front-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
				</div>
				<div className="stars-item">
					<div className="back-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
					<div className="front-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
				</div>
				<div className="stars-item">
					<div className="back-star">
						<span className="icomoon icon-star-fill"></span>
					</div>
					<div className="front-star" style={{width:'70%'}}>
						<span className="icomoon icon-star-fill"></span>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Stars;