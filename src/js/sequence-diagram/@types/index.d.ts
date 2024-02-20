type Position = {
	x: number,
	y: number
};

type Participants = {
	id: string,
	position: Position,
	name: string,
};

type Groups = string[];

type Messages = {
	from: string,
	to: string,
	text: string,
}

type MessageSpans = number[];

type Configuration = undefined | {
	width: number,
	height: number,
	marginActorsY: number,
	marginMessagesY: number,
	marginBetweenMessages: number,
}
