import {
	dia,
	shapes
} from '@joint/core';

export default () => {
	window.joint = window?.joint || {
		dia: {...dia},
		shapes: {...shapes}
	};
};
