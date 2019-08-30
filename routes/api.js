const express = require('express');
const router = express.Router({ mergeParams: true });
const PipeController = require('@controller/api/PipeController');

router.route('/help')
	.post(PipeController.getHelp);

module.exports = router;
