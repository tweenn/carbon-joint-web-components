import { html } from 'lit';

import '../../components/puzzle';
// import defaultProperties from '../../components/puzzle/default-properties';

export interface PuzzleProps {
}
/**
 * @desc The puzzle component
 * mounted with a simple timeout to define properties
 */
export const Puzzle = ({
}) => {
	window.setTimeout(() => {
		const target = document.getElementsByTagName('joint-puzzle')[0];
		// target.configuration = configuration;
		// target.participants = participants;
		// target.groups = groups;
		// target.messages = messages;
		// target.messageSpans = messageSpans;
	}, 500);

	return html`<joint-puzzle />`;
};
