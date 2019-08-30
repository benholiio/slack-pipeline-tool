const dayjs = require('dayjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const releaseSchema = new Schema({
	name: {
		type: String,
		required: false,
		validate: {
			validator: (name) => {
				return typeof name === 'string';
			}
		}
	},
	time: {
		type: Number,
		required: true,
		validate: {
			validator: (time) => {
				return dayjs.unix(time).isValid();
			}
		}
	},
	active: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Release', releaseSchema);
