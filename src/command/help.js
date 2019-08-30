const { helpMessage } = require('@util/helpers');

const commands = {
	help: 'See this help message',
	status: 'See the current queue for the pipe',
	take: 'Add yourself to the production pipe queue',
	release: 'Release the pipe',
};

module.exports = (req, res) => res.send(helpMessage(commands));
