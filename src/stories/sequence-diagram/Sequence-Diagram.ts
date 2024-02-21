import { html } from 'lit';

import '../../components/sequence-diagram';
import defaultProperties from '../../components/sequence-diagram/default-properties';

export interface SequenceDiagramProps {
	/**
	 * @description A configuration object
	 */
	configuration: Configuration;
	/**
	 * @description An array of participants
	 */
	participants: Array<Participants>;
	/**
	 * @description An array of groups
	 */
	groups: Array<Groups>;
	/**
	 * @description An array of messages
	 */
	messages: Array<Messages>;
	/**
	 * @description An array of message-spans
	 */
	messageSpans: Array<MessageSpans>;
}
/**
 * @desc The sequence diagram component
 * mounted with a simple timeout to define properties
 */
export const SequenceDiagram = ({
	configuration = defaultProperties.configuration,
	participants = defaultProperties.participants,
	groups = defaultProperties.groups,
	messages = defaultProperties.messages,
	messageSpans = defaultProperties.messageSpans,
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
