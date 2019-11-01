const Release = require('@model/Release');

module.exports = async (req, res) => {
	const release = await Release.find({
		name: req.body.user_name,
		channel: req.body.channel_name
	});

	if (release.length === 0) {
		return res.send('You are not in the queue');
	}

	const result = await Release.deleteOne({
		name: req.body.user_name,
		channel: req.body.channel_name
	});

	if (result.ok && result.deletedCount) {
		res.send('You are removed from the queue');
	}
};
