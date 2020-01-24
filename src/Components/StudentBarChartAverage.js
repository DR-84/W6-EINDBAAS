import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryAxis,
	VictoryZoomContainer
} from 'victory';

const StudentBarChartAverage = props => {
	console.log(props.data);
	console.log(props.student);
	const studentNameData = props.data.filter(
		word => word.name === props.student
	);
	console.log(studentNameData);
	return (
		<div>
			<h1>{props.student}</h1>
			<VictoryChart
				height={250}
				width={450}
				containerComponent={
					<VictoryZoomContainer
						allowZoom={false}
						zoomDomain={{ x: [0, 10], y: [0, 5] }}
					/>
				}
			>
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
						data={studentNameData}
						x="assignment"
						y="funRating"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
					<VictoryBar
						orientation="right"
						barWidth={10}
						data={studentNameData}
						x="assignment"
						y="difficultyRating"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default StudentBarChartAverage;
