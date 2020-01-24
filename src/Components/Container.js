import React from 'react';
import StudentData from './StudentData';
import BarChartData from './BarChartData';
//import StudentPagesDropDown from './StudentPagesDropDown';
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			StudentData,
			Week: 'W1'
		};
		this.onSubmitWeekHandler = this.onSubmitWeekHandler.bind(this);
	}
	filterDataByName() {
		const filtered = this.state.StudentData.filter(name =>
			name.includes('Evelyn')
		);
		console.log(filtered);
	}
	onSubmitWeekHandler(event) {
		console.log('week got clicked yo', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;
		this.setState(prevState => {
			return {
				Week: dropDown
			};
		});
	}

	render() {
		return (
			<div>
				<BarChartData
					week={this.state.Week}
					onSubmitWeekHandler={this.onSubmitWeekHandler}
					data={this.state.StudentData}
				/>
			</div>
		);
	}
}

export default Container;
