import React from "react";
import "./mailList.css";

const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mailTitle">Ahora tiempo, ahorra dinero!</h1>
			<span className="mailDesc">
				Subscribete para recibir los mejores descuentos.
			</span>
			<div className="mailInputContainer">
				<input type="text" placeholder="Your Email" />
				<button>Subscribir</button>
			</div>
		</div>
	);
};

export default MailList;
