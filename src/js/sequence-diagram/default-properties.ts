const actors = [
	{
		id: 'browser',
		position: {
			x: 100,
			y: 0
		},
		name: 'Browser',
	},
	{
		id: 'web-server',
		position: {
			x: 400,
			y: 0
		},
		name: 'Web Server',
	},
	{
		id: 'database',
		position: {
			x: 600,
			y: 0
		},
		name: 'Database Server'
	}
];

const groups = [
	[
		'database',
		'web-server'
	]
];

const messages = [
	{
		from: 'browser',
		to: 'web-server',
		text: 'HTTP GET Request',
	},
	{
		from: 'web-server',
		to: 'database',
		text: 'SQL Command',
	},
	{
		from: 'database',
		to: 'web-server',
		text: 'Result Set',
	},
	{
		from: 'web-server',
		to: 'browser',
		text: 'HTTP Response',
	},
];

const messageSpans = [
	[1, 2]
];

export default {
	actors,
	groups,
	messages,
	messageSpans
}
