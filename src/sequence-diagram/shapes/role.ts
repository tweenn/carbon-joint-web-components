import {
	shapes
} from '@joint/core';

export default () => {
	const standard = shapes.standard;

	standard.Rectangle.define('sd.Role', {
		z: 2,
		size: { width: 100, height: 80 },
		attrs: {
			body: {
				stroke: '#A0A0A0',
				strokeWidth: 1,
				rx: 2,
				ry: 2
			},
			label: {
				fontSize: 18,
				fontFamily: 'sans-serif',
				textWrap: {
					width: -10
				}
			}
		}
	}, {
		placeholder: 'What\'s the role?',

		setName: function(name) {
			this.attr(['label', 'text'], name);
		}
	});
};
