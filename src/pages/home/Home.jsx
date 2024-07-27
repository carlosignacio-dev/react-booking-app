import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<Featured />
				<h1 className="homeTitle">Busca por tipo de propiedad</h1>
				<PropertyList />
				<h1 className="homeTitle">Propiedades que los huespedes aman</h1>
				<FeaturedProperties />
			</div>
		</div>
	);
}

export default Home;
