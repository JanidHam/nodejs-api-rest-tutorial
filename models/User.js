var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Email regular expression.
const emailRegex = [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email' ]

var userSchema = new Schema({
	name: { 
		type: String, 
		required: [true, 'Named first'], 
		trim: true 
	},
	lastname: { 
		type: String, 
		trim: true 
	},
	username: { 
		type: String, 
		trim: true, 
		maxlength: [30, 'Username too long']
	},
	email: { 
		type: String, 
		required: true, 
		trim: true, 
		match: emailRegex 
	},
	age: { 
		type: Number, 
		min: [10, 'Wait a few more year'], 
		max: 70 
	},
	gender: { 
		type: String, 
		enum: ['Masculino', 'Femenino'] 
	}

	}, 
	{ timestamps: true } // automatically add createdAt and updatedAt fields to schema.
)

module.exports = mongoose.model('User', userSchema)