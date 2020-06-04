const { Schema, model } = require(`mongoose`);

const schema = new Schema({
  cusine: {
    type: String,
    required: true
  },
  followers: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = model(`User`, schema);