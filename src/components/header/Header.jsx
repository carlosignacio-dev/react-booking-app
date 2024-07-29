import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
	/* Barra Destino */
	const [destination, setDestination] = useState("");
	/* Abrir Cerrar Calendario */
	const [openDate, setOpenDate] = useState(false);
	/* Fechas Calendario */
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	/* Numero de personas y habitaciones */
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adulto: 1,
		niño: 0,
		habitacion: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === "increase" ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	/* Boton Buscar */
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate("/hoteles", { state: { destination, date, options } });
	};

	return (
		<div className="header">
			<div
				className={
					type === "list" ? "headerContainer listMode" : "headerContainer"
				}
			>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Alojamiento</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Vuelos</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Alquila un Auto</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Atracciones</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Taxis del Aeropuerto</span>
					</div>
				</div>
				{type !== "list" && (
					<>
						<h1 className="headerTitle">
							Disfruta de los descuentos, Es Genial!
						</h1>
						<p className="headerDesc">
							Gana recompensas por tus viajes: obtén ahorros instantáneos del
							10% o más con una cuenta gratuita de Reservas Booking.
						</p>
						<button className="headerBtn">Iniciar Sesion / Registrar</button>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<input
									type="text"
									placeholder="¿Cual es tu destino?"
									className="headerSearchInput"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
								<span
									onClick={() => setOpenDate(!openDate)}
									className="headerSearchText"
								>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
									date[0].endDate,
									"MM/dd/yyyy"
								)}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
										minDate={new Date()}
									/>
								)}
							</div>
							{/* Barra de Busqueda */}
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} className="headerIcon" />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="headerSearchText"
								>{`${options.adulto} adulto -  ${options.niño} niño - ${options.habitacion} habitacion`}</span>
								{openOptions && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adultos</span>
											<div className="optionCounter">
												<button
													className="optionCounterButton"
													onClick={() => handleOption("adulto", "decrease")}
													disabled={options.adulto <= 1}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adulto}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("adulto", "increase")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Niños</span>
											<div className="optionCounter">
												<button
													className="optionCounterButton"
													onClick={() => handleOption("niño", "decrease")}
													disabled={options.niño <= 0}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.niño}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("niño", "increase")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Habitacion</span>
											<div className="optionCounter">
												<button
													className="optionCounterButton"
													onClick={() => handleOption("habitacion", "decrease")}
													disabled={options.habitacion <= 1}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.habitacion}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("habitacion", "increase")}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="headerBtn" onClick={handleSearch}>
									Buscar
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
