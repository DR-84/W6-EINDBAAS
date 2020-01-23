import React from 'react';

const MakeDropDownItems = props => {
	return (
		<select name="students">
			<option value={props.name}>{props.name}</option>
		</select>
	);
};

export default MakeDropDownItems;
