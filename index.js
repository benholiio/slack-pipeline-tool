const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('@config/app').get(process.env.NODE_ENV);
const commandRouter = require('@router/command');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.post('/command', commandRouter);

http.listen(config.port, () => {
	mongoose.connect(config.database, {
		useNewUrlParser: true
	});

	console.log(`Listening on port ${config.port}`);
});
