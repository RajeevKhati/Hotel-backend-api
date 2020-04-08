const mongoose = require("mongoose");

let hotelSchema = new mongoose.Schema({
	name: String,
	description: String,
	location: String,
	costPerNight: {
	  AC: Number,
	  NonAC: Number
	},
	wifi: Boolean,
	swimmingPool: Boolean,
	laudryFacilities: Boolean,
	rating: String,
	createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("hotel", hotelSchema);