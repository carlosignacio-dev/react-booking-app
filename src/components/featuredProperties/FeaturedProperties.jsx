import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	return (
		<div className="fp">
			<div className="fpItem">
				<img
					className="fpImg"
					src="./src/assets/images/featuredProperties1.jpg"
					alt="Featured Property 1"
				/>
				<span className="fpName">Apart Hotel Stare Miasto</span>
				<span className="fpCity">Madrid, España</span>
				<span className="fpPrice">Desde USD$120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excelente</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="./src/assets/images/featuredProperties2.jpg"
					alt="Featured Property 1"
				/>
				<span className="fpName">Oasis Lagoon Suites</span>
				<span className="fpCity">Phuket, Tailandia</span>
				<span className="fpPrice">Desde USD$120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excelente</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="./src/assets/images/featuredProperties3.jpg"
					alt="Featured Property 1"
				/>
				<span className="fpName">Serenity Sands Retreat</span>
				<span className="fpCity">Malé, Maldivas</span>
				<span className="fpPrice">Desde USD$120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excelente</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="./src/assets/images/featuredProperties4.jpg"
					alt="Featured Property 1"
				/>
				<span className="fpName">Paradise Cove Residences</span>
				<span className="fpCity">Bora Bora, Polinesia Francesa</span>
				<span className="fpPrice">Desde USD$120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excelente</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
