import React from 'react';
import MakeDropDownItems from './MakeDropDownItems';

const StudentPagesDropDown = props => {
	const namesNames = props.data.map(item => item.name);
	const namesFiltered = namesNames.filter((name, index, names) => {
		return names.indexOf(name) === index;
	});
	return <MakeDropDownItems name={namesFiltered} />;
};

export default StudentPagesDropDown;
