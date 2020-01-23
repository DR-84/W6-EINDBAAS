import React from 'react';
import MakeDropDownItems from './MakeDropDownItems';

const StudentPagesDropDown = props => {
	const studentNames = props.data.map(item => item.name);
	const studentNamesFiltered = studentNames.filter((name, index, names) => {
		return names.indexOf(name) === index;
	});
	const singleStudent = studentNamesFiltered.map(item => item);
	console.log(singleStudent);
	return <MakeDropDownItems student={singleStudent} />;
};

export default StudentPagesDropDown;
