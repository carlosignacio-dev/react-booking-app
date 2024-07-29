import React from "react";
import "./searchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="../src/assets/images/searchitem1.jpg"
				alt="item 1"
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">a 500m del centro</span>
				<span className="siTaxiOp">Taxis del Aeropuerto gratis</span>
				<span className="siSubtitle">
					Studio Apartment with Air Conditioning
				</span>
				<span className="siFeatures">
					Entire studio - 1 bathroom - 21m 1 full bed
				</span>
				<span className="siCancelOp">Cancelacion gratis</span>
				<span className="siCancelOpSubtitle">
					Cancela despues, asegura este precio hoy mismo!
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excelente</span>
					<button>8.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">$123</span>
					<span className="siTexOp">Incluye Impuestos</span>
					<button className="siCheckButton">Ver Disponibilidad</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
