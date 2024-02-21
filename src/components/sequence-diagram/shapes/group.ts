import {
	shapes
} from '@joint/core';

export default () => {
	const standard = shapes.standard;

	standard.Rectangle.define('sd.RoleGroup', {
		z: 1,
		attrs: {
			body: {
				stroke: '#DDDDDD',
				strokeWidth: 1,
				fill: '#F9FBFA'
			},
			label: {
				refY: null,
				refX: null,
				y: 'calc(h+2)',
				x: 'calc(w/2)',
				textAnchor: 'middle',
				textVerticalAnchor: 'top',
				fontSize: 12,
				fontFamily: 'sans-serif',
				textWrap: {
					width: -10
				}
			}
		}
	}, {
		placeholder: 'What\'s the group\'s name?',

		fitRoles: function() {
			this.fitToChildren({ padding: 10 });
		}
	});
};
