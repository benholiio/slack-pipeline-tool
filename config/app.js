const config = {
	development: {
		database: process.env.MONGODB_URI || 'mongodb://127.0.01/slack-pipeline-tool-db',
		port: process.env.PORT || 4390
	},
	test: {
		database: 'mongodb://127.0.01/slack-pipeline-tool-test-db'
	}
};

exports.get = (env) => {
	return config[env] || config.development;
};
