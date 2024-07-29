import React from "react";
import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
	/* Slider */
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	/* Fotos */
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove("l")}
						/>
						<div className="sliderWrapper">
							<img className="sliderImg" src={photos[slideNumber].src} alt="" />
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove("r")}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserva ahora!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New York</span>
					</div>
					<span className="hotelDistance">
						Excelente lugar - a 500m del centro
					</span>
					<span className="hotelPriceHighlight">
						Reserva por $114 esta propiedad y recibe un viaje gratis en taxi
						desde el aeropuerto
					</span>
					<div className="hotelImages">
						{photos.map((photo, i) => (
							<div onClick={() => handleOpen(i)} className="hotelImgWrapper">
								<img src={photo.src} alt="" className="hotelImg" />
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Aloja en el corazon de Krakow</h1>
							<p className="hotelDesc">
								Ubicado a 5 minutos a pie de la Puerta de San Florián en
								Cracovia, Tower Street Apartments ofrece alojamiento con aire
								acondicionado y WiFi gratuito. Las unidades cuentan con suelos
								de madera y disponen de una cocina totalmente equipada con
								microondas, TV de pantalla plana y baño privado con ducha y
								secador de pelo. También se ofrece una nevera, así como una
								tetera eléctrica y una cafetera. Entre los puntos de interés
								populares cerca del apartamento se incluyen el Mercado de Paños,
								la Plaza del Mercado Principal y la Torre del Ayuntamiento. El
								aeropuerto más cercano es el Aeropuerto Internacional Juan Pablo
								II Cracovia-Balice, a 16,1 km de Tower Street Apartments, y el
								establecimiento ofrece un servicio de transporte al aeropuerto
								por un costo adicional.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Aloja por 9 noches</h1>
							<span>
								En el corazon de Krakow, esta propiedad tiene una excelente
								locacion, puntaje de 9.8!
							</span>
							<h2>
								<b>$945</b> (9 noches)
							</h2>
							<button>Reserva ahora!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
