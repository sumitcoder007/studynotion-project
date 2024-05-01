// const Razorpay = require("razorpay");
// require('dotenv').config();

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });


const Razorpay = require("razorpay");
require('dotenv').config();

exports.instance = new Razorpay({
	key_id: "rzp_test_cYU7ALYePb3EmW",
	key_secret: "LNrOKMbfRoZbvgxMnz0PSYOx",
});
