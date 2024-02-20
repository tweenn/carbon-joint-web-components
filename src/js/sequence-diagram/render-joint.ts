import { gray10, gray20 } from '@carbon/colors'

export default ({
	target,
	config,
	participants,
	groups,
	messages,
	messageSpans
}) => {
	const sd = window.joint.shapes.sd;
	const dia = window.joint.dia;

	const paperWidth = config?.width ?? 800;
	const paperHeight = config?.height ??  600;
	const marginActorsY = config?.marginActorsY ??  20;
	const marginMessagesY = config?.marginMessagesY ??  50;
	const marginBetweenMessages = config?.marginBetweenMessages ??  100;

	const graph = new dia.Graph();
	const paper = new dia.Paper({
		el: target,
		width: paperWidth,
		height: paperHeight,
		model: graph,
		frozen: true,
		async: true,
		sorting: dia.Paper.sorting.APPROX,
		defaultConnectionPoint: { name: 'rectangle' },
		background: { color: gray10 },
		linkPinning: false,
		markAvailable: true,
		preventDefaultBlankAction: false,
		restrictTranslate: false,
		interactive: false,
		defaultLink: false,
		connectionStrategy: false,
		validateConnection: false,
		highlighting: false
	});

	paper.el.style.border = `1px solid ${gray20}`;

	const addedParticipants = {};
	const addedLifelines = {};

	participants.forEach((actor) => {
		actor.position.y += marginActorsY;

		const role = new sd.Role({ position: actor.position });
		role.setName(actor.name);
		role.addTo(graph);

		addedParticipants[actor.id] = role;

		const lifeLine = new sd.Lifeline();
		lifeLine.attachToRole(role, paperHeight);
		lifeLine.addTo(graph);

		addedLifelines[actor.id] = lifeLine;
	});

	groups.forEach((group) => {
		const backend = new sd.RoleGroup();

		try {
			group.forEach((actorId) => {
				backend.embed(addedParticipants[actorId]);
			});

			backend.addTo(graph);
			backend.fitRoles();
		} catch (error) {
			console.error('Grouping Error\n', error);
		}
	});

	const addedMessages = [];
	let erroredMessages = 0;
	messages.forEach((message, index) => {
		try {
			const from = addedLifelines[message.from];
			const to = addedLifelines[message.to];
			const description = message.text;

			const addedMessage = new sd.Message();
			addedMessage.setFromTo(from, to);
			addedMessage.setStart(marginMessagesY + (index * marginBetweenMessages) - (erroredMessages * marginBetweenMessages));
			addedMessage.setDescription(description);
			addedMessage.addTo(graph);

			addedMessages[index] = addedMessage;
		} catch (error) {
			console.error('Messages Error\n', error);
			erroredMessages++;
		}
	});

	messageSpans.forEach((span) => {
		const from = addedMessages[span[0]];
		const to = addedMessages[span[1]];

		const lifeSpan = new sd.LineLineSpan();
		lifeSpan.attachToMessages(from, to);
		lifeSpan.addTo(graph);
	});

	paper.unfreeze();
};
