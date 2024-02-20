import type { Meta, StoryObj } from '@storybook/web-components';
import type { SequenceDiagramProps } from './Sequence-Diagram';
import { SequenceDiagram } from './Sequence-Diagram';
import defaultProperties from '../../js/sequence-diagram/default-properties';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Sequence Diagram',
	tags: ['autodocs'],
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
