import React from 'react';

const StudentPagesDropDown = props => {
	/* const AssignmentNames = props.data.map(item => item.assignment);

	const assignmentNamesFiltered = AssignmentNames.filter(
		(name, index, names) => {
			return names.indexOf(name) === index;
		}
	);
	console.log(assignmentNamesFiltered);

	
	
		.map(name => {
			const AssignmentValues = props.data.filter(
				item => item.assignment === name
			);
			const difficultyAverage =
				AssignmentValues.reduce(
					(prev, curr) => prev + curr.difficultyRating,
					0
				) / AssignmentValues.length;
			const funAverage =
				AssignmentValues.reduce((prev, curr) => prev + curr.funRating, 0) /
				AssignmentValues.length;
			return {
				assignment: name,
				difficultyAverage: difficultyAverage,
				funAverage: funAverage
			};
		}; */

	return (
		<div>
			<select name="rating" onChange={props.onChangeHandler}>
				<option value="defaultValue">Students</option>
				<option value="student"></option>
			</select>
		</div>
	);
};

export default StudentPagesDropDown;
