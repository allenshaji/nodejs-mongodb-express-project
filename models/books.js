// books.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var StudentSchema = new Schema({
  no: String,
  name: String,
  fathersname: String,
  address: String,
  age: String,
  branch: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student',StudentSchema);