import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(
		location.state?.destination || ""
	);
	const [date, setDate] = useState(
		location.state?.date || [
			{ startDate: new Date(), endDate: new Date(), key: "selection" },
		]
	);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(
		location.state?.options || { adulto: 1, niño: 0, habitacion: 1 }
	);

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Buscar</h1>
						<div className="lsItem">
							<label>Destino</label>
							<input placeholder={destination} type="text" />
						</div>
						<div className="lsItem">
							<label>Fecha Check-In</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="lsItem">
							<label>Opciones</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Precio Minimo <small>por noche</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Precio Maximo <small>por noche</small>
									</span>
									<input type="number" className="lsOptionInput" />
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adultos</span>
									<input
										type="number"
										className="lsOptionInput"
										placeholder={options.adulto}
										min={1}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Niños</span>
									<input
										type="number"
										className="lsOptionInput"
										placeholder={options.niño}
										min={0}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Habitaciones</span>
									<input
										type="number"
										className="lsOptionInput"
										placeholder={options.habitacion}
										min={1}
									/>
								</div>
							</div>
						</div>
						<button>Buscar</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
