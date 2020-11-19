import React from "react";
import "./homepage.styles.css";
import Header from "../header/header.component.jsx";
import Cards from "../cards/cards.component.jsx";

const HomePage = ({ cases, todayCases, deaths, recovered, active, tests }) => {
	return (
		<div className="homepage">
			<Header />
			<Cards
				cases={cases}
				todayCases={todayCases}
				deaths={deaths}
				recovered={recovered}
				active={active}
				tests={tests}
			/>
		</div>
	);
};

export default HomePage;
