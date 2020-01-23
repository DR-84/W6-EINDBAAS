import React from 'react';

const MakeDropDownItems = props => {
	console.log(props.student);
	return (
		<select name="students" onStudentClickHandler={props.onStudentClickHandler}>
			<option value={props.student}>{props.student}</option>
		</select>
	);
};

export default MakeDropDownItems;
