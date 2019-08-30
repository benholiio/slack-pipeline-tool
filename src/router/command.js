const getHelp = require('@command/help');
const getStatus = require('@command/status');
const take = require('@command/take');
const release = require('@command/release');

module.exports = (req, res) => {
	const command = req.body.text;

	switch (command) {
		case 'help':
			getHelp(req, res);
		break;

		case 'status':
			getStatus(req, res);
		break;

		case 'take':
			take(req, res);
		break;

		case 'release':
			release(req, res);
		break;
	
		default:
		break;
	}
};
