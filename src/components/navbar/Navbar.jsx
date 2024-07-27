import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navContainer">
				<span className="logo">Reservas Booking</span>
				<div className="navItems">
					<button className="navButton">Registrar</button>
					<button className="navButton">Iniciar Sesion</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
