import group from './group';
import lifeLine from './life-line';
import message from './message';
import messageSpan from './message-span';
import role from './role';

export default () => {
	group();
	lifeLine();
	message();
	messageSpan();
	role();
};
