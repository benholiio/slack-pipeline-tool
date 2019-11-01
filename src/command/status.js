const Release = require('@model/Release');
const { prettyList } = require('@util/helpers');

module.exports = (req, res) => {
	const queue = Release.find({
		active: true,
		channel: req.body.channel_name
	}, (err, queue) => {
		if (err) return res.json(err);

		if (queue.length === 0) {
			return res.send(`The queue for the #${req.body.channel_name} production pipe is empty!`);
		}

		console.log(queue);

		return res.send(prettyList(queue));

		res.json(queue);
	});
};
