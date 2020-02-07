import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryAxis,
	VictoryLegend
} from 'victory';

const BarChartData = props => {
	const AssignmentNames = props.data.map(item => item.assignment);
	/* const weekName = props.week.map(item => item.weekValue); */
	const assignmentNamesFiltered = AssignmentNames.filter(
		(name, index, names) => {
			return names.indexOf(name) === index;
		}
	);

	//console.log('assignments in barchartdata', assignmentNamesFiltered);
	const filteredByWeek = assignmentNamesFiltered.filter(word =>
		word.includes(props.week)
	);

	console.log(props);
	const AssignmentAverages = filteredByWeek.map(name => {
		const AssignmentValues = props.data.filter(
			item => item.assignment === name
		);

		const difficultyAverage =
			AssignmentValues.reduce((prev, curr) => prev + curr.difficultyRating, 0) /
			AssignmentValues.length;
		const funAverage =
			AssignmentValues.reduce((prev, curr) => prev + curr.funRating, 0) /
			AssignmentValues.length;

		return {
			assignment: name,
			difficultyAverage: difficultyAverage,
			funAverage: funAverage
		};
	});
	//console.log('AssignmentAverages in barchartdata', AssignmentAverages);
	//console.log(AssignmentAverages);
	return (
		<div>
			<div className="Form-Div">
				<form>
					<select name="week" onChange={props.onSubmitWeekHandler}>
						<option value="W1">Week One</option>
						<option value="W2">Week Two</option>
						<option value="W3">Week Three</option>
						<option value="W4">Week Four</option>
						<option value="W5">Week Five</option>
						<option value="W6">Week Six</option>
					</select>
					<select name="dataSelector" onChange={props.onSubmitWeekHandler}>
						<option value="allData">Compare Fun / Difficulty </option>
						<option value="fun"> Fun</option>
						<option value="difficulty"> Difficulty</option>
					</select>
				</form>
			</div>

			<VictoryChart height={150} width={650}>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 5,
							angle: 20
						}
					}}
				/>
				<VictoryLegend
					style={{
						labels: {
							fontSize: 5
						}
					}}
					x={50}
					y={5}
					orientation="horizontal"
					gutter={10}
					data={[
						{ name: 'FUN', symbol: { fill: '#6ec1e4' } },
						{
							name: 'DIFFICULTY',
							symbol: { fill: '#ECBA1D' }
						}
					]}
				/>
				<VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />
				<VictoryGroup offset={10}>
					<VictoryBar
						animate={{ duration: 500 }}
						color="#6ec1e4"
						orientation="left"
						barWidth={10}
						data={AssignmentAverages}
						x="assignment"
						y="funAverage"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
					<VictoryBar
						color="#ECBA1D"
						orientation="right"
						barWidth={10}
						data={AssignmentAverages}
						x="assignment"
						y="difficultyAverage"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default BarChartData;
