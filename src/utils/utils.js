import moment from"moment";

export const calculateYears = (birthday) => {

	let a = moment();
	let b = moment(birthday);
	let years = a.diff(b, 'year');
	b.add(years, 'years');

	return years
}