import type { Meta, StoryObj } from '@storybook/web-components';
import type { SequenceDiagramProps } from './Sequence-Diagram';
import { SequenceDiagram } from './Sequence-Diagram';
import defaultProperties from '../../components/sequence-diagram/default-properties';
import ComponentDescription from './Sequence-Diagram.description';

const meta = {
	title: 'Sequence Diagram',
	tags: ['autodocs', 'sequence', 'diagram'],
	render: (args) => SequenceDiagram(args),
	parameters: {
		docs: {
			description: {
				component: ComponentDescription
			},
		},
	},
	argTypes: {
		configuration: {
			control: 'object',
			description: 'The configuration object that controls width, height and margins',
			table: {
				defaultValue: {
					summary: 'object',
					detail: JSON.stringify(defaultProperties.configuration)
				},
			}
		},
		participants: {
			control: 'object',
			description: 'An array of participant objects',
			table: {
				defaultValue: {
					summary: 'array',
					detail: JSON.stringify([defaultProperties.participants[0]])
				},
			}
		},
		groups: {
			control: 'object',
			description: 'An array of groups of participants identified by participant id',
			table: {
				defaultValue: {
					summary: 'array',
					detail: JSON.stringify([defaultProperties.groups[0]])
				},
			}
		},
		messages: {
			control: 'object',
			description: 'An array of messages',
			table: {
				defaultValue: {
					summary: 'array',
					detail: JSON.stringify([defaultProperties.messages[0]])
				},
			}
		},
		messageSpans: {
			control: 'object',
			description: 'An array of groups of messages identified by message order',
			table: {
				defaultValue: {
					summary: 'array',
					detail: JSON.stringify([defaultProperties.messageSpans[0]])
				},
			}
		}
	},
} satisfies Meta<SequenceDiagramProps>;

export default meta;
type Story = StoryObj<SequenceDiagramProps>;

export const Default: Story = {
	args: {
		...defaultProperties
	}
};
