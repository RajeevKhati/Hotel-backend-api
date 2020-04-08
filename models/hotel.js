const mongoose = require("mongoose");

let hotelSchema = new mongoose.Schema({
	name: String,
	location: String
});

module.exports = mongoose.model("hotel", hotelSchema);