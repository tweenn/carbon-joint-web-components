import {
	dia
} from '@joint/core';

export default () => {
	dia.Link.define('sd.LineLineSpan', {
		z: 4,
		attrs: {
			line: {
				connection: true,
				stroke: '#222222',
				strokeWidth: 2
			},
			wrapper: {
				connection: true
			},
			icon: {
				atConnectionRatioIgnoreGradient: 0.5
			}
		}
	}, {
		markup: [{
			tagName: 'path',
			selector: 'line',
			attributes: {
				'fill': 'none',
				'pointer-events': 'none'
			}
		}, {
			tagName: 'path',
			selector: 'wrapper',
			attributes: {
				'fill': 'none',
				'stroke': 'transparent',
				'stroke-width': 20
			}
		}, {
			tagName: 'g',
			selector: 'icon',
			children: [{
				tagName: 'circle',
				attributes: {
					'r': 18,
					'fill': '#222222'
				}
			},
			{
				tagName: 'g',
				selector: 'icon-wrapper',
				attributes: {
					style: 'transform: scale(0.65) translate(-16px, -16px);'
				},
				children: [
					{
						tagName: 'path',
						attributes: {
							'd': 'M15 19H17V21H15zM15 23H17V25H15z',
							'stroke': '#FFFFFF',
							'stroke-width': 1,
							'fill': 'none'
						}
					}, {
						tagName: 'path',
						attributes: {
							'd': 'M23,11.67V4h3V2H6V4H9v7.67a2,2,0,0,0,.4,1.2L11.75,16,9.4,19.13a2,2,0,0,0-.4,1.2V28H6v2H26V28H23V20.33a2,2,0,0,0-.4-1.2L20.25,16l2.35-3.13A2,2,0,0,0,23,11.67ZM21,4v7H11V4Zm0,16.33V28H11V20.33L14.25,16,12,13h8l-2.25,3Z',
							'stroke': '#FFFFFF',
							'stroke-width': 1,
							'fill': 'none'
						}
					}
				]
			}]
		}],
		attachToMessages: function(from, to) {
			this.source(from, { anchor: { name: 'connectionRatio', args: { ratio: 1 }}});
			this.target(to, { anchor: { name: 'connectionRatio', args: { ratio: 0 }}});
		}
	});
};
