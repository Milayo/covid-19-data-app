import React from "react";
import "./cards.styles.css";

const Cards = ({ cases, todayCases, deaths, recovered, active, tests }) => {
	console.log({deaths})
	return (
		<div className="cards">
			<div className="card-item">{`TOTAL CASES
			${cases}
			`}</div>
			<div className="card-item"> {`TODAY'S CASES
			${todayCases}
			`}</div>
			<div className="card-item"> {`TOTAL DEATHS
			${deaths}
			`}</div>
			<div className="card-item">{`RECOVERED
			${recovered}
			`}</div>
			<div className="card-item"> {`ACTIVE CASES
			${active}
			`} </div>
			<div className="card-item">{`TOTAL TESTS
			${tests}
			`}</div>
		</div>
	);
};

export default Cards;
