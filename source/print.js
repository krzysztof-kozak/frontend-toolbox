import _ from 'lodash';

export default function printMe() {
	const fileName = _.join(['print', 'js'], '.');
	console.log(`I get called from ${fileName}!`);
}
