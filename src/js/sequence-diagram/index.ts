
import {
	LitElement,
	html
} from 'lit';

import {
	customElement,
	property,
	query
} from 'lit/decorators.js';

import css from './css'

import defaultProperties from './default-properties';

import declareJoin from './joint';
import declareShapes from './shapes';

import renderJoint from './render-joint';

@customElement('sequence-diagram')
export class SequenceDiagram extends LitElement {
	public static readonly shadowRootOptions = {
		mode: 'closed'
	};

	static styles = css;

	@query('#diagram')
	diagram;

	// Declare reactive properties
	@property()
	configuration?: Configuration = undefined;

	@property()
	participants?: Array<Participants> = [];

	@property()
	groups?: Array<Groups> = [];

	@property()
	messages?: Array<Messages> = [];

	@property()
	messageSpans?: Array<MessageSpans> = [];

	protected firstUpdated(): void {
		declareJoin();
		declareShapes();
	};

	updated(): void {
		renderJoint({
			target: this.diagram,
			config: this.configuration ?? defaultProperties.configuration,
			participants: this.participants.length > 0 ? this.participants : defaultProperties.participants,
			groups: this.groups.length > 0 ? this.groups : defaultProperties.groups,
			messages: this.messages.length > 0 ? this.messages : defaultProperties.messages,
			messageSpans: this.messageSpans.length > 0 ? this.messageSpans : defaultProperties.messageSpans
		});
	};

	// Render the UI as a function of component state
	render() {
		return html`
			<div id="diagram"></div>
		`;
	};
};
