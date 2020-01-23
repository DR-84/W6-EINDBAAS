import React from 'react';
import StudentData from './StudentData';
import BarChartData from './BarChartData';
import StudentPagesDropDown from './StudentPagesDropDown';
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			StudentData,
			Week: 'W1',
			Students: []
		};
		this.onSubmitWeekHandler = this.onSubmitWeekHandler.bind(this);
	}
	onSubmitWeekHandler(event) {
		console.log('submit got clicked yo', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;

		console.log(dropDown);
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
				<StudentPagesDropDown
					onStudentClickHandler={this.onStudentClickHandler}
					data={this.state.StudentData}
				/>
			</div>
		);
	}
}

export default Container;
