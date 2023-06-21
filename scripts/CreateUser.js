const mongoose = require('mongoose');
var crypto = require('crypto');
const User = require('../models/User');


const newUser = {
    username: "joe",
    firstName: "Joe",
    lastName: "Schmoe",
    password: "joe1234",
    email: "joe@joe.com"
}