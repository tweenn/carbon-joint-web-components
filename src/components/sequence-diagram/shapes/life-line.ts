import {
	shapes
} from '@joint/core';

export default () => {
	const standard = shapes.standard;

	standard.Link.define('sd.Lifeline', {
		z: 3,
		attrs: {
			line: {
				stroke: '#A0A0A0',
				strokeWidth: 1,
				strokeDasharray: '5,2',
				targetMarker: null
			}
		}
	}, {
		attachToRole: function(role, maxY) {
			const roleCenter = role.getBBox().center();
			this.set({
				source: { id: role.id },
				target: { x: roleCenter.x, y: maxY }
			});
			role.embed(this);
		}
	});
};
