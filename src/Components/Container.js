import React from 'react';
import StudentData from './StudentData';
import BarChartData from './BarChartData';
//import { VictoryBar, VictoryChart } from 'victory';
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			StudentData,
			week: 'W1'
		};
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
	onSubmitHandler(event) {
		console.log('submit got clicked yo', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;

		console.log(dropDown);
		this.setState(prevState => {
			return {
				week: dropDown
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Assignments</h1>

				<BarChartData
					week={this.state.week}
					onSubmitHandler={this.onSubmitHandler}
					data={this.state.StudentData}
				/>
			</div>
		);
	}
}

export default Container;
