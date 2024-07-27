import React from "react";
import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					className="featuredImg"
					src="./src/assets/images/1.jpg"
					alt="Dublin"
				/>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h1>123 Propiedades</h1>
				</div>
			</div>
			<div className="featuredItem">
				<img
					className="featuredImg"
					src="./src/assets/images/2.jpg"
					alt="Austin"
				/>
				<div className="featuredTitles">
					<h1>Austin</h1>
					<h1>232 Propiedades</h1>
				</div>
			</div>
			<div className="featuredItem">
				<img
					className="featuredImg"
					src="./src/assets/images/3.jpg"
					alt="Reno"
				/>
				<div className="featuredTitles">
					<h1>Reno</h1>
					<h1>285 Propiedades</h1>
				</div>
			</div>
		</div>
	);
};

export default Featured;
