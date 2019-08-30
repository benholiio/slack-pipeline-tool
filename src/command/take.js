const Release = require('@model/Release');

module.exports = async (req, res) => {
	const userCheck = await Release.find({
		name: req.body.user_name
	});

	if (userCheck.length > 0) {
		return res.send('You are already in the queue');
	}

	const release = new Release({
		name: req.body.user_name,
		time: new Date().getTime() / 1000,
		active: true,
	});

	const result = await release.save();

	if (result.active) {
		res.send('You have been added to the queue');
	}
};
