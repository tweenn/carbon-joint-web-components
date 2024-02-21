import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
	stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
		defaultName: 'Documentation',
	},
};
export default config;
