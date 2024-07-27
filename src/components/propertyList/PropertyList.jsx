import React from "react";
import "./propertyList.css";

const PropertyList = () => {
	return (
		<div className="pList">
			<div className="pListItem">
				<img className="pListImg" src="./src/assets/images/hotel1.jpg" alt="" />
				<div className="pListTitles">
					<h1>Hoteles</h1>
					<h2>314 Hoteles</h2>
				</div>
			</div>
			<div className="pListItem">
				<img className="pListImg" src="./src/assets/images/hotel2.jpg" alt="" />
				<div className="pListTitles">
					<h1>Apartamentos</h1>
					<h2>255 Hoteles</h2>
				</div>
			</div>
			<div className="pListItem">
				<img className="pListImg" src="./src/assets/images/hotel3.jpg" alt="" />
				<div className="pListTitles">
					<h1>Resorts</h1>
					<h2>95 Hoteles</h2>
				</div>
			</div>
			<div className="pListItem">
				<img className="pListImg" src="./src/assets/images/hotel4.jpg" alt="" />
				<div className="pListTitles">
					<h1>Villas</h1>
					<h2>68 Hoteles</h2>
				</div>
			</div>
			<div className="pListItem">
				<img className="pListImg" src="./src/assets/images/hotel5.jpg" alt="" />
				<div className="pListTitles">
					<h1>Cabañas</h1>
					<h2>38 Hoteles</h2>
				</div>
			</div>
		</div>
	);
};

export default PropertyList;
