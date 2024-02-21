import type { Meta, StoryObj } from '@storybook/web-components';
import type { SequenceDiagramProps } from './Sequence-Diagram';
import { SequenceDiagram } from './Sequence-Diagram';
import defaultProperties from '../../src/sequence-diagram/default-properties';

const meta = {
	title: 'Sequence Diagram',
	tags: ['autodocs', 'sequence', 'diagram'],
	render: (args) => SequenceDiagram(args),
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// 	onClick: { action: 'onClick' },
	// 	size: {
	// 		control: { type: 'select' },
	// 		options: ['small', 'medium', 'large'],
	// 	},
	// },
} satisfies Meta<SequenceDiagramProps>;

export default meta;
type Story = StoryObj<SequenceDiagramProps>;

export const Default: Story = {
	args: {
		...defaultProperties
	},
};
