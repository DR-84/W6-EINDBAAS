import React from 'react';

const MakeDropDownItems = props => {
	console.log('name', props.name);
	return <option value={props.name}>{props.name}</option>;
};

export default MakeDropDownItems;

/* import React from 'react';

const MakeDropDownItems = props => {
	console.log('name?', props.name);
	const nameArray = props.name;
	console.log(nameArray);
	const singleStudentInDropDown = () =>
		nameArray.map(item => {
			return (
				<select name="students">
					<option value={item}>{item}</option>
				</select>
			);
		});
	return singleStudentInDropDown;
};

export default MakeDropDownItems; */
