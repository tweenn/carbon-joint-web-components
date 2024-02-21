import {
	dia
} from '@joint/core';

export default () => {
	const element = dia.Element

	element.define('jigsaw.Piece', {
		attrs: {
			polygon: {
				tabs: [0, 0, 0, 0],
				image: ['', 0, 0],
				stroke: '#ddd'
			}
		}
	}, {
		markup: [{
			tagName: 'polygon',
			selector: 'polygon'
		}]
	} , {
		attributes: {
			tabs: { /* [topTab, rightTab, bottomTab, leftTab] */
				qualify: Array.isArray,
				set: function(tabs, refBBox) {
					const tabSize = this.model.prop('tabSize');
					const points = [];
					const refCenter = refBBox.center();
					const refPoints = [
						refBBox.origin(),
						refBBox.topRight(),
						refBBox.corner(),
						refBBox.bottomLeft()
					];
					for (let i = 0; i < 4; i++) {
						const a = refPoints[i];
						const b = refPoints[i + 1] || refPoints[0];
						points.push(a);
						if (tabs[i]) {
							const mid = g.Line(a, b).midpoint();
							points.push(
								mid.clone().move(b, tabSize),
								mid.clone().move(refCenter, tabs[i] * tabSize),
								mid.clone().move(a, tabSize)
							);
						}
					}
					return {
						points: points.join(' ').replace(/@/g,' ')
					};
				}
			},
			image: { /* [imageId, rowIndex, columnIndex] */
				qualify: Array.isArray,
				set: function(image) {
					const paper = this.paper;
					const model = this.model;
					const width = model.prop('size/width');
					const height = model.prop('size/height');
					const id = 'image-pattern-' + width + '-' + height + '-' + image.join('-');
					if (!paper.isDefined(id)) {
						const tabSize = model.get('tabSize');
						V('pattern', {
							id: id,
							x: - tabSize,
							y: - tabSize,
							width: width + 2 * tabSize,
							height: height + 2 * tabSize,
							patternUnits: 'userSpaceOnUse'
						}, [
							V('use', {
								'xlink:href': '#' + image[0],
								x: - (image[1] * width + tabSize),
								y: - (image[2] * height + tabSize)
							})
						]).appendTo(paper.defs);
					}
					return {
						fill: 'url(#' + id + ')'
					};
				}
			}
		}
	});
};
