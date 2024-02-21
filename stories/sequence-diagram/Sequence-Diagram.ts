import { html } from 'lit';

import '../../src/sequence-diagram';

export interface SequenceDiagramProps {
	/**
	 * A configuration object
	 */
	configuration: Configuration;
	/**
	 * An array of participants
	 */
	participants: Array<Participants>;
	/**
	 * An array of groups
	 */
	groups: Array<Groups>;
	/**
	 * An array of messages
	 */
	messages: Array<Messages>;
	/**
	 * An array of message-spans
	 */
	messageSpans: Array<MessageSpans>;
}
/**
 * @desc The sequence diagram component
 * mounted with a simple timeout to define properties
 */
export const SequenceDiagram = ({
	configuration,
	participants,
	groups,
	messages,
	messageSpans,
}) => {
	window.setTimeout(() => {
		const target = document.getElementsByTagName('sequence-diagram')[0];
		target.configuration = configuration;
		target.participants = participants;
		target.groups = groups;
		target.messages = messages;
		target.messageSpans = messageSpans;
	}, 500);

	return html`<sequence-diagram />`;
};
