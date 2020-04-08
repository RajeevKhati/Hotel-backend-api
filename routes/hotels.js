const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel.js");

//Get Route
router.get("/hotels", (req, res) => {
	Hotel.find({}, (err, allHotels) => {
		if(err){
			res.status(500).json(err);
		}else{
			res.status(200).json(allHotels);
		}
	});
});

//Post Route
router.post("/hotels", (req, res) => {
	console.log(req.body);
	if(Object.keys(req.body).length === 0){
		return res.status(400).json({message: "required content is missing"});
	}
	let newHotel = {name: req.body.name, location: req.body.location};
	Hotel.create(newHotel, (err, createdHotel) => {
		if(err){
			res.status(500).json(err);
		}else{
			res.status(201).json(createdHotel);
		}
	});
});

//Update Route
router.put("/hotels/:id", (req, res) => {
	if(Object.keys(req.body).length === 0){
		return res.status(400).json({message: "required content is missing"});
	}
	let updatedHotel = {name: req.body.name, location: req.body.location};
	Hotel.findByIdAndUpdate(req.params.id, updatedHotel, (err, overridenHotel) => {
		if(err){
			res.status(500).json(err);
		}else{
			res.status(200).json({overridenHotel: overridenHotel, updatedHotel: updatedHotel});
		}
	});
});

//Delete Route
router.delete("/hotels/:id", (req, res) => {
	Hotel.findByIdAndRemove(req.params.id, (err, deletedHotel) => {
		if(err){
			console.log(err);
			res.status(500).json(err);
		}else{
			res.status(200).json(deletedHotel);
		}
	});
});

module.exports = router;