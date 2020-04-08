const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const hotelRoutes = require("./routes/hotels.js");

mongoose.connect("mongodb://localhost:27017/hotelApiDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
	// useCreatIndex: true
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(hotelRoutes);

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).json({message: "You are at wrong place"});
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port}`));