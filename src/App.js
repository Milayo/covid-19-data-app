import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/homepage/homepage.component.jsx";

class App extends Component {
	constructor() {
		super();

		this.state = {
			values: [],
		};
	}

	componentDidMount() {
		fetch("https://disease.sh/v3/covid-19/all")
			.then((response) => response.json())
			.then((result) => this.setState({ values: result }));
	}

	render() {
		const {
			cases,
			todayCases,
			deaths,
			recovered,
			active,
			tests,
		} = this.state.values;

		return (
			<div>
				<HomePage
					cases={cases}
					todayCases={todayCases}
					deaths={deaths}
					recovered={recovered}
					active={active}
					tests={tests}
				></HomePage>
			</div>
		);
	}
}

export default App;
