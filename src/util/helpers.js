const formatList = (commands) =>
	Object.keys(commands)
		.map((cmd) =>
			`\`/pipe ${cmd}\` ---- ${commands[cmd]}`
		)
		.join('\n');

module.exports.helpMessage = (commands) => `
Use the following commands:

${formatList(commands)}
`;

const formatQueue = (queue) => {
	return queue.map((person, index) => {
		return `${index + 1}) ${person.name}\n`;
		//return person.name+'\n';
	});
};

module.exports.prettyList = (queue) => `
The queue for the production pipe is:

${formatQueue(queue)}
`;
