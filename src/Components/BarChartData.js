import React from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from 'victory';

const BarChartData = props => {
	const AssignmentNames = props.data.map(item => item.assignment);
	/* const weekName = props.week.map(item => item.weekValue); */
	const assignmentNamesFiltered = AssignmentNames.filter(
		(name, index, names) => {
			return names.indexOf(name) === index;
		}
	);

	console.log('weekname in barchartdata', props.week);
	const filteredByWeek = assignmentNamesFiltered.filter(word =>
		word.includes(props.week)
	);
	console.log(filteredByWeek);
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

	console.log(AssignmentAverages);
	return (
		<div>
			<select name="week" onChange={props.onSubmitHandler}>
				<option value="W1">Week One</option>
				<option value="W2">Week Two</option>
				<option value="W3">Week Three</option>
				<option value="W4">Week Four</option>
				<option value="W5">Week Five</option>
				<option value="W6">Week Six</option>
			</select>
			<VictoryChart height={250} width={700}>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 5
						}
					}}
				/>
				<VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />
				<VictoryGroup offset={10}>
					<VictoryBar
						orientation="left"
						barWidth={10}
						data={AssignmentAverages}
						x="assignment"
						y="funAverage"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
					<VictoryBar
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
